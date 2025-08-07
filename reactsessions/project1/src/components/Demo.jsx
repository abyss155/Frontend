import React from 'react'
import './Demo.css'
const Demo = () => {
      var cars = ["audi ","mercedes","BMW","LandRover","Farrari"]
      var menus=["open","edit","save","delete"]
      var filteredCars= cars.filter((car)=>{
            return car.length >=5
      })
      console.log(filteredCars)
  return (
    <>
      <div id = "Odisha">
            <p>
                  rourkela
            </p>
            <p>
                  Cuttack
            </p>
      </div>
      <div id = "UttarPradesh">
            <p>
                  Prayagraj
            </p>
            <p>
                  Pratapgarh
            </p>
      </div> 
      {
            filteredCars.map((car)=>{
                  return <p>{car}</p>
            })
      }
      <ol>
            {
              filteredCars.map((car)=>{
                  return <li>
                         {car}
                  </li>
              })    
            }
      </ol>
      <ol id = "menus">
            {
                  menus.map((menu)=>{
                        return <li>
                              {menu}
                        </li>
                  })
            }
      </ol>
    </>
  )
}

export default Demo