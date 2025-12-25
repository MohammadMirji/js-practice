//JavaScript Coding Questions and Answers

// https://www.geeksforgeeks.org/javascript/javascript-coding-questions-and-answers/

// 1. Write a Program to reverse a string in JavaScript.

// function rvrs (str) {
// const u = str.split("").reverse().join("")
// console.log(u);
// };
// rvrs("Mohd is a gud boy");

// g4g ans
// function reverseString(str) 
// {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("GeeksForGeeks"));

// 2. Write a Program to check whether a string is a palindrome string.

// function pali (str) {
// let rvrsd = str.split("").reverse().join("");

// if (str === rvrsd) {
//     console.log(str + " is a Palindrome")
// } else {
//     console.log(str + " is not a Palindrome")
// }
// };
// pali ("radar");

// g4g ans
// function isPalindrome(str) {
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// console.log(isPalindrome("GFG"));

// 3. Find the largest number in an array in JavaScript.

// function lrgstnum (arr) {
// num = Math.max(...arr);
// console.log(num);
// }
// lrgstnum([1,2,3,4,5]);

// g4g ans
// function findLargest(arr) {
//     //Suppose first element is the largest
//     let largest = arr[0]; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             // Update the largest if a bigger element is found
//             largest = arr[i]; 
//         }
//     }
//     return largest;
// }
// console.log(findLargest([99, 5, 3, 100, 1]));

// 4. How Remove the first element from an array in JavaScript?

// function rmvelmnt (arr) {
// let u = arr.slice(1)
// console.log(u);
// }
// rmvelmnt ([10,20,30,40,50]);

// g4g ans
// let arr = [5, 6, 7];
// arr = arr.slice(1); 
// // Create a new array without the first element
// console.log(arr);

// 5. Write a Program to use a callback function?

// function greet (name, callback) {
//     console.log(`Hello ${name}`)
//     callback();
// }
// function hru () {
//     console.log("How are you?");
// }
// Can make multiple functions, and pass which function to be used in CB
// function aruok () {
//     console.log("Are you ok?");
// }
// greet ("Mohammad", aruok);

// g4g ans
// function greet(name, callback) {
//     callback(`Hello, ${name}!`);
// }
// greet('Geek', message => console.log(message));

// 6. Write a code to create an arrow function?

// const greet = (name) => {
//     console.log(`Hello ${name}`)
// };
// greet ("Mohammad");

// g4g ans
// const add = (a, b) => a + b;
// console.log(add(6, 2));

// 7. Write a Program to add a property to an object?

// i
// const obj = {
//     name: "Mohammad",
//     age: 30
// }
// obj.lastName = "Mirji"
// console.log(obj);

// ii
// const obj = {
//     name: "Mohammad",
//     age: 30
// }
// function person (ln, lnn) {
// const key = ln
// obj[key] = lnn
// console.log(obj)
// }
// person ("Last Name","Mirji")

// iii
// const obj = {
//     name: "Mohammad",
//     age: 30
// }
// Object.assign(obj, {LastName:"Mirji"})
// console.log(obj)

// iv
// const obj = {
//     name: "Mohammad",
//     age: 30
// }
// obj = { ...obj, "LastName" : "Mirji"}
// console.log(obj)

// g4g ans
// const obj = { name: 'Riya' };
// obj.age = 21;
// console.log(obj);

// 8. Write a Program to delete a property from an object?
// const obj = {
//     name: "Mohammad",
//     age: 30
// }
// delete obj.age;
// console.log(obj);

// g4g ans
// const obj = { name: 'Riya', age: 21 };
// delete obj.age;
// console.log(obj);

// 9. What will be the output of the given code?
// console.log([1, 2, 3].reduce((a, b) => a + b));
// reduce loops the array with a as initial(accumulator) value and b as current value

// 10. What will be the output of the given code?
console.log('gfg'.repeat(3));