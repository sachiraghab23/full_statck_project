const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/orderModel');

const secret_key = process.env.secretKey //it contains the secret key to connect with front-end part of stripe payment portal
const stripe = require('stripe')(secret_key)

router.post('/placeorder', async (req, res) => {
  const { token, subTotal, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });
    const payment = await stripe.charges.create({
      amount: subTotal * 100,
      currency: 'inr',
      customer: customer.id,
      receipt_email: token.email,
    }, {
      idempotencyKey: uuidv4() //it is unique for every order & it is used so that customer should not be charged twice for any order.
    });

    if (payment) {
      const newOrder = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userId: currentUser._id,
        orderItems: cartItems,
        orderAmount: subTotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id
      })
      newOrder.save()
      res.send('Payment success');
    }
    else {
      res.send('Payment failed')
    }
  } catch (error) {
    return res.status(400).json({ messsage: 'something went wrong', error: error.stack });
  }
});

router.post("/getuserorders", async (req, res) => {
  const { userId } = req.body
  try {
    const orders = await Order.find({ userId: userId }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    return res.status(400).json({ message: 'Something went wrong', error: error.stack });
  }
});

router.get("/alluserorder", async (req, res) => {
  try {
    const orders = await Order.find({})
    res.status(200).send(orders)
  } catch (error) {
    res.status(400).json({
      message: 'Something went wrong',
      error: error.stack
    });
  }
});

router.post("/deliverorder", async (req, res) => {
  const orderId = req.body.orderId
  try {
    const order = await Order.findOne({_id:orderId})
    order.isDelivered = true;
    await order.save();
    res.status(200).send("order delivered successfully")
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong',
      error: error.stack
    });
  }
});
module.exports = router;