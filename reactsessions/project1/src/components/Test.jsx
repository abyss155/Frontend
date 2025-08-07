import React from 'react'
import './Test.css'

const Test = () => {
      
let number1=10
let number2=20;
let result = number1+number2;
console.log(result)

function addition(value1,value2)
{
      return value1+value2;
}
return (
    <div>
    <div>Welcome to KIIT, Have a nice stay</div>
    <div>Answer is {result}</div>
    <p>Revised batch Strength is {addition(15,78)}</p>
    </div>
  )
}

export default Test  