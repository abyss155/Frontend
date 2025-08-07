function sumOfDigit(num) {
      while (num >= 10) {
          let sum = 0;
          while (num > 0) {
              sum += num % 10;
              num = Math.floor(num / 10);
          }
          num = sum;
      }
      console.log("Single digit sum is:", num);
  }
  
  sumOfDigit(4444); // Output: Single digit sum is: 7
  


  function addition3()
{
      console.log(`Length of [] is ${arguments.length}`)
      console.log(arguments)
      console.log(arguments[0])
      console.log(`The value inside an [] is ${arguments[0]}`)
  
      if(arguments.length > 0)
      {
          let sum = 0
          for(let i = 0; i < arguments.length; i++)
          {
              sum += arguments[i]
          }
          console.log(sum)
     
      }
}