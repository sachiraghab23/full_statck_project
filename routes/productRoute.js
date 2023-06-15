const  express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

//get all products in database
router.get("/getAllProducts",async (req,res)=>{
  try{
    const products = await Product.find({});
    res.send(products);
  }
  catch(error){
    return res.status(400).json({message: error});
  }
});

router.post("/getproductbyid", async (req,res)=>{
  const productId = req.body.productId;
  try{
    const product = await Product.findOne({_id: productId})
    res.send(product);
  }
  catch(error){
    res.json({message: error});
  }
});

router.post("/addproduct",async (req,res)=>{
  const product = req.body.product;
  try{
    const newProduct = new Product({
      name: product.name,
      image: product.image,
      varients: ["small","medium","large"],
      description: product.description,
      category: product.category,
      prices: [product.prices]
    })
    await newProduct.save();
    res.status(200).json("New product added");
  }
  catch(error){
    res.status(400).json({message: error});
  }
});

router.post("/updateproduct", async (req,res)=>{
  const updatedProduct = req.body.updatedProduct;
  try{
    const product = await Product.findOne({_id:updatedProduct._id})
    product.name = updatedProduct.name,
    product.description = updatedProduct.description,
    product.image = updatedProduct.image,
    product.category = updatedProduct.category,
    product.prices = [updatedProduct.prices]
    await product.save();
    res.status(200).json("Product update success")
  } catch(error){
      res.status(400).json({message: error})
  }
})

router.post("/deleteproduct",async (req,res)=>{
  const productId = req.body.productId;
  try{
    await Product.findOneAndDelete({_id:productId})
    res.status(200).json("Product deleted")
  } catch(error){
    res.status(404).json({message:error});
  }
});

module.exports = router;