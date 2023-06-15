import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './css/Product.css';
import { addToCart } from '../actions/cartActions';

export default function Product({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');

  const dispatch = useDispatch()
  const addToCartHandler = () => {
    dispatch(addToCart(product, quantity, varient))
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='shadow-lg p-3 mb-5 bg-white container rounded product-card' >
        <div onClick={handleShow}>
          <h1>{product.name}</h1>
          <img src={product.image} alt="product" className='product-img card-img-top' />
        </div>
        <div className='d-flex'>
          <div className='w-100 m-1'>
            <p>Varients</p>
            <select className='form-control' value={varient} onChange={(e) => setVarient(e.target.value)}>
              {product.varients.map((varient) => (
                <option key={varient}>{varient}</option>
              ))}
            </select>
          </div>
          <div className='w-100 m-1'>
            <p>Quantity</p>
            <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
              {[...Array(10).keys()].map((x, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-container">
          <div className='m-1 w-100'>
            <h1 className='mt-1'>Price: {product.prices[0][varient] * quantity}/-
            </h1>
          </div>
          <div className='m-1 w-100'>
            <button className='btn btn-style' onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={product.image} className='img-fluid w-8'  alt='item' style={{ height: '400px' }} />
            <p>{product.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}
