import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import files & components
import Error from '../components/Error';
import Product from '../components/Product'
import Loader from '../components/Loader';
import { getAllProducts } from '../actions/productActions';

export default function Home() {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getAllProductReducer);
  const { loading, products, error  } = productstate;
  // console.log(products);
  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);

  return (
    <>
      <div>
        {loading ? (<Loader />)
          : error ? (<Error>Error while fetching items {error}</Error>)
            : (<div className='row justify-content-center'>
              {products.map((product) => (
                <div className='col-md-3 m-3' key={product.name}>                  
                    <Product product={product} />                  
                </div>
              ))}
            </div>)
        }
      </div>
    </>
  );
}

