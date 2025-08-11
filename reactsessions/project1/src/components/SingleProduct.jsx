import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

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
                  const rawData= await axios.get(`https://fakestoreapi.com/products/${id}`)
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
    <div>SingleProduct</div>
  )
}

export default SingleProduct