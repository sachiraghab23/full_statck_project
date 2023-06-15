import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProducts } from '../../actions/productActions';
import { Link } from 'react-router-dom';
import Error from '../Error';
import Loader from '../Loader';

export default function ProductsList() {
  const dispatch = useDispatch()
  const productsstate = useSelector(state => state.getAllProductsReducer)
  const { loading, products, error } = productsstate;
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
        ) :  error ? (
          <Error error={"Error while fetching item "+error} />
        ) : <div>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">S/n</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Prices</th>
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products && 
                  products.map((product,i) => (
                  <tr>
                    <td>{i+1}</td>
                    <td><img src={product.image} alt="not found" style={{ width: '90px', height: '90px' }} /></td>
                    <td>{product.name}</td>
                    <td>
                      Small : {product.prices[0]['small']}
                      <br />
                      Medium : {product.prices[0]['medium']}
                      <br />
                      Large : {product.prices[0]['large']}
                    </td>
                    <td>{product.category}</td>
                    <td>
                      <Link to={`/admin/editproduct/${product._id}`}>
                        <i class="fa fa-edit" style={{cursor:'pointer'}}></i>
                      </Link>
                      <Link to={`/admin/deleteproduct/${product._id}`}>
                        <i class="fa fa-trash" style={{cursor:'pointer', color:'red'}}
                        onClick={()=>{dispatch(deleteProduct(product._id))}}></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      }
    </>
  )
}
