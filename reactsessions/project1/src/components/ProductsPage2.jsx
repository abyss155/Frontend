import React, { useEffect,useState}from 'react'

import axios from 'axios';
import ProductCard from './ProductCard';
import CategoryBar from './CategoryBar';
const ProductsPage2 = () => {

      useEffect(
            ()=>{
                  loadDataFromFakeStoreServer()
            },[]      //dependency Array
      )

      async function loadDataFromFakeStoreServer()
      {
            try{
                  const rawData= await axios.get('https://fakestoreapi.com/products')
                  console.log(rawData)
                  setMyproducts(rawData.data)
            }
            catch(error)
            {
                  console.log(error)
            }
      }
      
      const[myproducts,setMyproducts] =useState([])
      const[buproducts,setBuproducts] =useState([])
            console.log(myproducts)
      
      const productCategories= myproducts.map(
            (product)=>{
                  return product.category
            }
      )
      console.log(productCategories)

      const uniqueCategories= new Set(productCategories)

      console.log(uniqueCategories)

      const allCategories=[...uniqueCategories,"All"]

      console.log(allCategories)

      function filterByCategories(categoryValue)
      {
            if(categoryValue!='All')
            {
            const filteredProducts= myproducts.filter(
                  (product)=>{
                        return product.category===categoryValue
                  }
            )

            setMyproducts(filteredProducts)
      }
      else 
      {
            setMyproducts(buproducts)
      }
      }

      return (
            <>
            <CategoryBar list={allCategories} handleClick ={filterByCategories} />
            <div className="container">
                  <div className="row">
                        {myproducts.map((product,index) => {
                              return <ProductCard key = {index} product={product}/>
                        })}
                  </div>
            </div>
            </>
      )
}

export default ProductsPage2