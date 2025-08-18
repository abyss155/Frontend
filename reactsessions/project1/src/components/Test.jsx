import React, { useContext } from 'react'
import './Test.css'
import UserContext from '../context/UserContext';

const Test = () => {
      
let number1=10
let number2=20;
let result = number1+number2;
console.log(result)

function addition(value1,value2)
{
      return value1+value2;
}
const {car} = useContext(UserContext)
return (
    <div>
    <div>Welcome to KIIT, Have a nice stay</div>
    <div>Answer is {result}</div>
    <p>Revised batch Strength is {addition(15,78)}</p>
    <div>My cars  is {car}</div>
    </div>
  )
}

export default Test  