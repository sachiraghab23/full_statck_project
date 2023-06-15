import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import files & components
import Error from "../Error";
import Success from "../Success"
import Loader from "../Loader";
import { addProduct } from "../../actions/productActions";

export default function AddNewProduct() {
  const [name, setname] = useState("")
  const [smallPrice, setsmallPrice] = useState()
  const [mediumPrice, setmediumPrice] = useState()
  const [largePrice, setlargePrice] = useState()
  const [image, setimage] = useState("")
  const [description, setdescription] = useState("")
  const [category, setcategory] = useState("")
  const dispatch = useDispatch();
  const addProductState = useSelector((state)=>state.addProductReducer);
  const { loading, error, success } = addProductState;

  const submitForm = (e)=>{
    e.preventDefault();
    const product = {
      name,image,description,category,
      prices:{
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice
      },
    };
    dispatch(addProduct(product));
  }

  return <div>
    {loading && (<Loader/>)}
    {error && (<Error error="add new product error"/>)}
    {success && (<Success/>)}
    <div className="form bg-light">
      <div className="form-group">
        <label>Name</label>
        <div className="form-control"
          type="text"
          value={name}
          onChange={e => setname(e.target.value)}
          placeholder="Enter product name"
        ></div>
      </div>
      <div className="row mb-3">
        <div className="form-group">
          <label>Small Price</label>
          <div className="form-control"
            type="text"
            value={smallPrice}
            onChange={e => setsmallPrice(e.target.value)}
            placeholder="Enter small price"
          ></div>
        </div>
        <div className="form-group">
          <label>Medium Price</label>
          <div className="form-control"
            type="text"
            value={mediumPrice}
            onChange={e => setmediumPrice(e.target.value)}
            placeholder="Enter medium price"
          ></div>
        </div>
        <div className="form-group">
          <label>Large Price</label>
          <div className="form-control"
            type="text"
            value={largePrice}
            onChange={e => setlargePrice(e.target.value)}
            placeholder="Enter large price"
          ></div>
        </div>
      </div>
      <div className="form-group">
        <label>Image</label>
        <div className="form-control"
          type="text"
          value={image}
          onChange={e => setimage(e.target.value)}
          placeholder="Add image url"
        ></div>
      </div>
      <div className="row form-group">
        <label>Description</label>
        <div className="form-control"
          type="text"
          value={description}
          onChange={e => setdescription(e.target.value)}
          placeholder="Add description"
        ></div>
      </div>
      <div className="form-group">
        <label>Category</label>
        <div className="form-control"
          type="text"
          value={category}
          onChange={e => setcategory(e.target.value)}
          placeholder="Add category"
        ></div>
      </div>
      <button className="btn btn-primary" type="submit" onSubmit={submitForm}>
        Add Item
      </button>
    </div>
  </div>
}
