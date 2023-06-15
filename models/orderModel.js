const mongoose = require("mongoose")
const orderSchema = mongoose.Schema({
  name : {type: String, require:[true,"order name required"]},
  email : {type: String, require:[true,"email is required"]},
  userId : {type: String, require:true},
  orderItems : [],
  shippingAddress : {type:Object},
  orderAmount : {type: Number, require},
  isDelivered : {type: Boolean, default: false},
  transactionId : {type: String},
},{
  timestamps : true
})

module.exports = mongoose.model("orders", orderSchema)