//weakly typed language
//multi paradigm
//versatile lang
//ES- Ecma script
//ES6- let and const ECMA2015

//*********************8var vs let****************
/*let a = 10; // let- block scope
if (a == 10) {
  let a = 20;
  console.log(a);
}
console.log(a);
*/

/*
var b = 10; //var- global scope(window object)
if (b == 10) {
  var b = 20;
  console.log(b);
}
console.log(b);
*/

//*******************Temporal Dead Zone(accessing variable before declaration) .. Variable Hoisting
// console.log(x);
// console.log(y);
// var x;// works fine
// let y;//gives error

//************Arrow functions***************
const name = "Tarun";
// const sayHello = (name) => {
//   console.log("Hello" + name);
// };
// sayHello(name);

//*********Task***************
//create a arrow function which takes two arguments and return the sum
// let sum = (a, b) => a + b;
// console.log(sum(1, 2));

//**************factorial***********
let fact = (n) => {
  return n >= 1 ? n * fact(n - 1) : 1;
};
console.log(fact(5));

//*******template string***********8
