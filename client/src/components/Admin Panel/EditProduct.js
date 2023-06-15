import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById, updateProduct } from '../../actions/productActions'

// import files & components
import Error from '../Error';
import Success from '../Success'
import Loader from '../Loader';

export default function EditProduct({ match }) {
  const [name, setname] = useState('')
  const [smallPrice, setsmallPrice] = useState()
  const [mediumPrice, setmediumPrice] = useState()
  const [largePrice, setlargePrice] = useState()
  const [image, setimage] = useState('')
  const [description, setdescription] = useState('')
  const [category, setcategory] = useState('')

  const dispatch = useDispatch();
  const getProductByIdState = useSelector(state => state.getProductByIdReducer)
  const { error, product, success } = getProductByIdState;
  const updateProductState = useSelector(state=> state.updateProductByIdReducer);
  const {updateloading} = updateProductState
  useEffect(() => {
    if (product) {
      if (product._id === match.params.productId) {
        setname(product.name);
        setdescription(product.description);
        setcategory(product.category);
        setimage(product.image);
        setsmallPrice(product.prices[0]['small']);
        setmediumPrice(product.prices[0]['medium']);
        setlargePrice(product.prices[0]['large']);
      } else {
        dispatch(getProductById(match.params.productId));
      }
    } else {
      dispatch(getProductById(match.params.productId));
    }
  }, [product, dispatch, match.params.productId]);

  const submitForm = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id:match.params.productId,
      name, image, description, category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largePrice
      },
    };
    dispatch(updateProduct(updatedProduct));
  }

  return (
    <div>
      {updateloading && (<Loader />)}
      {error && (<Error error='add new product error' />)}
      {success && (<Success success='Item added successfully'/>)}
      <div className='form bg-light'>
        <div className='form-group'>
          <label>Name</label>
          <div className='form-control'
            type='text'
            value={name}
            onChange={e => setname(e.target.value)}
            placeholder='Enter product name'
          ></div>
        </div>
        <div className="row mb-3">
          <div className='form-group'>
            <label>Small Price</label>
            <div className='form-control'
              type='text'
              value={smallPrice}
              onChange={e => setsmallPrice(e.target.value)}
              placeholder='Enter small price'
            ></div>
          </div>
          <div className='form-group'>
            <label>Medium Price</label>
            <div className='form-control'
              type='text'
              value={mediumPrice}
              onChange={e => setmediumPrice(e.target.value)}
              placeholder='Enter medium price'
            ></div>
          </div>
          <div className='form-group'>
            <label>Large Price</label>
            <div className='form-control'
              type='text'
              value={largePrice}
              onChange={e => setlargePrice(e.target.value)}
              placeholder='Enter large price'
            ></div>
          </div>
        </div>
        <div className='form-group'>
          <label>Image</label>
          <div className='form-control'
            type='text'
            value={image}
            onChange={e => setimage(e.target.value)}
            placeholder='Add image url'
          ></div>
        </div>
        <div className='row form-group'>
          <label>Description</label>
          <div className='form-control'
            type='text'
            value={description}
            onChange={e => setdescription(e.target.value)}
            placeholder='Add description'
          ></div>
        </div>
        <div className='form-group'>
          <label>Category</label>
          <div className='form-control'
            type='text'
            value={category}
            onChange={e => setcategory(e.target.value)}
            placeholder='Add category'
          ></div>
        </div>
        <button className='btn btn-primary' type='submit' onSubmit={submitForm}>
          Update
        </button>
      </div>
    </div>
  )
}
