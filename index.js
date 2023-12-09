//You are given an array of numbers. Your task is to use iteration methods with arrow functions to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Filtering

Write code to perform the following tasks using the filter method with arrow functions:
Q1) Create a new array containing numbers that are divisible by 5.
*****************************************************************/

//Ex. for a normal function
// function numGQ25(n) {
//     return n >= 25;
//   }
//   console.log(numbers.filter(numGQ25));

// Arrow function
// const "....name...." =    () => .......

//1
const fil1 = numbers.filter((n) => n % 5 == 0);
console.log(fil1);

/*****************************************************************
Mapping

Write code to perform the following tasks using the filter method with arrow functions:
Q2) Create a new array that contains each number multiplied by 2.
*****************************************************************/

//2
const fil2 = numbers.filter((n) => n * 2);
console.log(fil2);

/*****************************************************************
Combining Filtering and Mapping

Combine the filter and map methods to perform the following task with arrow functions: 
Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
*****************************************************************/

//5
const filnmap = numbers.filter((n) => n >= 20).map((n) => n ** 2);
console.log(filnmap);
