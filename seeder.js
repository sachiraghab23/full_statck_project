const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const Product = require("./models/productModel");
const Products = require("./data/static_data");

//config dot env and mongodb conn file
dotenv.config()
connectDB();

//import data
const importData = async ()=>{
  try{
    await Product.deleteMany();
    const sampleData = Products.map(item => {return {...item}});
    await Product.insertMany(sampleData);
    console.log("data imported");
    process.exit();
  } catch(error){
    console.log(`error: ${error}`)
    process.exit(1);
  }
}

const dataDestroy = ()=>{};
if(process.argv[2]==="-d"){
  dataDestroy();
}
else{
  importData();
}