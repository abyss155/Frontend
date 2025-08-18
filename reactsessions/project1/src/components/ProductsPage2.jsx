import React, {useContext, useEffect, useState}from 'react'
import ProductCard from './ProductCard';
import CategoryBar from './CategoryBar';
import SearchBox from './SearchBox';
import ProductContext from '../context/ProductContext';
const ProductsPage2 = () => {

      const {products} = useContext(ProductContext)

      console.log(products)
      const[myproducts,setMyproducts] =useState(products)
      const[buproducts,setBuproducts] =useState(products)
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
      function searchByTitle(event)
      {
            const value=event.target.value
            if(value.length===0)
                  setMyproducts(buproducts)
            else 
            {
                  const searchedProducts=myproducts.filter(
                        (product)=>
                        {
                              return product.title.toLowerCase().includes(value.toLowerCase())
                        }
                  )
                  setMyproducts(searchedProducts)
            }
      }

      return (
            <>
            <SearchBox handleChange={searchByTitle}/>
            { <CategoryBar list={allCategories} handleClick ={filterByCategories} />  /*allCategories is then passed as a prop to CategoryBar */}
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