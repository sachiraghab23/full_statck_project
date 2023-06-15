const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name:{
    type:String, 
    required:true,
  },
  varients:[],
  prices : [],
  category: {
    type:String,
    required:true
  },
  image: {
    type:String,
    required:true
  },
  description:{
    type: String, 
    require:true
  }
},{
  timestamps:true,
})

const productModel = mongoose.model("FoodProducts",productSchema);
module.exports = productModel;