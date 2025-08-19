import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard';
import axios from 'axios';
import ProductContext from '../context/ProductContext';


const SingleProduct = () => {

      const {id } =useParams();
      const {products}=useContext(ProductContext);

      const[product, setProduct] = useState(null);// null by default
      
      useEffect(() => {
            if (products && products.length > 0) {
              const foundProduct = products.find((prod) => prod.id === parseInt(id));
              setProduct(foundProduct);
            }
          }, [id]); // re-run when products or id changes
      

  return (
      <>
         {
        product ? (
          <>
          {/* <Breadcrumbs product={product} /> */}
          <ProductCard product={product} /> 
          </>   
        ) 
        : 
        (
          <div className="text-center mt-5">Loading product details...</div>
        )
      }
      </>
  );
}

export default SingleProduct; 