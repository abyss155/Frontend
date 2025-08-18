import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard';
import axios from 'axios';


const SingleProduct = () => {

      const {id } =useParams();
      const [product ,setProduct]=useState()

      useEffect(
            ()=>{
                  loadDataFromFakeStoreServer()
            },[]      //dependency Array
      )

      async function loadDataFromFakeStoreServer()
      {
            try{
                  const rawData= await axios.get(`http://localhost:8087/products/${id}`)
                  console.log(rawData)
                  setProduct(rawData.data)
                  console.log(product)
            }
            catch(error)
            {
                  console.log(error)
            }
      }

  return (
      <>
        {
            product ? ( <ProductCard product ={product} />) : ( <div className="text-center mt-5"> Loading product details...</div> )
         }
      </>
  );
}

export default SingleProduct; 