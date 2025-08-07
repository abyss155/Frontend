// rest operator
let cars = ["Audi", "BMW", "Merc", "Maruti", "Honda", "Tesla", "Mahindra"];

const [car1, car2, ...otherCars] = cars;
console.log(car1);        // "Audi"
console.log(car2);        // "BMW"
console.log(otherCars);   // ["Merc", "Maruti", "Honda", "Tesla", "Mahindra"]
console.log(cars);        // Original array remains unchanged

// spread operator
let fruits = ["Apple", "Mango", "Banana"];       // array 1
let veg = ["Brinjal", "Potato", "Tomato"];       // array 2

const foodgrains = [...fruits, ...veg];          // combine both arrays
console.log(foodgrains);                         // ["Apple", "Mango", ..., "Tomato"]

let fruits4 = [...fruits, "Papaya", "Chicku"];   // add more items with spread
console.log(fruits4);

// object destructuring with rest operator
let player1 = {
    jno: 18,
    pname: "Virat",
    mp: 100,
    rs: 10000
};

const { jno, pname, ...remainingObject } = player1;
console.log(jno);             // 18
console.log(pname);           // "Virat"
console.log(remainingObject); // { mp: 100, rs: 10000 }

// shorthand object creation
const rno = 18;
const name = "Alice";
const per = 78.5;

const student = { rno, name, per };
console.log(student);         // { rno: 18, name: 'Alice', per: 78.5 }

// object destructuring in function arguments
const customer = {
    name: "Tom",
    age: 40,
    city: "New Jersey"
};

// old way (commented)
/*
function print(value) {
    console.log(`Customer Name is ${value.name}`);
    console.log(`Customer Age is ${value.age}`);
    console.log(`Customer City is ${value.city}`);
}
*/

// ES6 way using destructuring
function print({ name, age, city }) {
    console.log(`Customer Name is ${name}`);
    console.log(`Customer Age is ${age}`);
    console.log(`Customer City is ${city}`);
}

print(customer);
