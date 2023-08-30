// 1. Outputting text in console

// console.log("Ayush");
// console.info(1);
// console.log(true);

// 1. Concatenating strings
let firstName = "Ayush";
let lastName = "Bansal";

console.log("Full Name: " + firstName + " " + lastName);

// 2. Mathematical calculations
let radius = 5;
let circumference = 2 * Math.PI * radius;
console.log("circumference of your circle is: " + circumference);

// Is js case-sensitive?
console.log(radius);

// 3. Boolean expressions:
// true and false
console.log(5 < 10);

// 4. Array printing
let arr = ["apple", "grape", "pineapple"];
console.log(arr);

// Variable and data types
// 1. Strings
let myname = "my string";
console.log(typeof myname, myname, "Ayush", myname);
// 2. Number
let age = 10.3456789;
console.log(typeof age);

// 3. Boolean
let isStudent = true;
console.log(isStudent, typeof isStudent);

// 4. Null
// it indicates absence of a value
let address = null;
console.log(address);

// 5. Undefined
// variable is declared but not assigned a value resulting an undefined dt
// it indicates absence of a assigned value
let phoneNumber;
console.log(phoneNumber);

// 6. Object
let person = {
  name: "Ayush",
  age: 10,
  isEmployed: false,
  phoneNumber: null,
  address,
};
console.log(typeof person);

// 7. Array
// int []fruits=[10,12,13,24342]
let fruits = ["apple", "banana", 10,true,{hobby:"singing"}];
console.log(fruits[4]);


// 8. Date object

let currentDate= new Date();
console.log(currentDate);
console.log(currentDate.getDate(),currentDate.getMonth());
// jan->0 dec->11


// 9. BigInt
let largeNumber=2345678923456789876523456789876543n;
console.log(typeof largeNumber)


// Arithmetic operations
// 1. Addition
let a=10;
let b=3;
let sum=5+10;
console.log(a+b);

// 2. Subtraction
let diff=a-b;
console.log(diff);


// 3. Division
let division=a/b;
console.log(division)


// EXTRA UNDERSTANDING MATH functions

console.log(Math.floor(Math.random()*1000000));


// 4. Multiplication
let num=10;
console.log(num*10);

// 5. Modulo/Remainder

console.log(12%3);

// 6. Increment
let var1=10;
console.log(++var1);

// 7. Decrement
let var2=10;
console.log(--var2);

// 8. Exponentiation
let num1=10;
let num2=2;
console.log(num1**num2);