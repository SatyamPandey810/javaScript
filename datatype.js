// let num=10;
// console.log(num ,typeof num);

// let obj={
//     name:"hello world",
//     age:10
// }
// console.log(obj.name);
// console.log(obj.age);

// numeric conversion

//string to number
// let str="10"

// console.log(str,typeof str);
// let number =Number(str)
// console.log(number,typeof number);

// number to string
// let number=10

// console.log(number,typeof number);

// let string =String(number)
// console.log(string,typeof string);

// let bul = true
// console.log(bul, typeof bul);

// let number = Number(bul)
// console.log(number, typeof number);

// operators

// let firstName='satyam'
// let lastName='pandey'
// let fullName=firstName +" "+lastName;
// console.log(fullName);


// console.log(10 + '10');
// console.log(10 - '10');
// console.log(10 * '10');
// console.log(10 / '10');
// console.log(10 % '10');
// console.log(10 ** '10');

// console.log(10 + 'a');
// console.log(10 - 'a');
// console.log(10 * 'a');
// console.log(10 / 'a');
// console.log(10 % 'a');
// console.log(10 ** 'a');

// let a=10;
// a++
// console.log(a++);
// console.log(a);


// let a=10;
// ++a
// // console.log(a);
// console.log(++a);

// let a = 10 + 20 + 30;
// console.log(a);

// let a=10;
// let b='10';
// console.log(a==b);

// let a=10;
// let b='10';
// console.log(a===b);

// let a = 10;
// let b = 10;
// console.log(a !== b);

// let number = 10;
// let result = (number < 1 === 0 ? "true" : "false");
// console.log(result);


// let a = 10;
// let b = 11;

// console.log(a === 10 && b === 10);


// let a = 11;
// let b = 10;

// console.log(a === 10 || b === 10);

// let a=true;
// console.log(!a);

// let a = 10;
// if (a % 2 === 0) {
//     console.log("numbr is even");
// }

// let a = 10;
// let b = 10;
// if (a >= b) {
//     console.log(" A number is big");
// } else {
//     console.log("somthing went wrong");
// }

// let a = 18;
// let b = 80;

// if (a < b) {
//     console.log("availble");
// } else {
//     console.log("no availble");
// }

// let a = number
// let a = prompt("plese enter number")
// if (a % 2 === 0) {
//     console.log("yes number is deviseble by 2");
// } else if (a % 5 === 0) {
//     console.log("number is devide by 5");
// } else if (a % 3 === 0) {
//     console.log("number is devide by 3");
// }else{
//     console.log("plese enter right number");
// }

// let a = prompt("enter number")

// if (a % 2 === 0) {
//     console.log("number is odd");
// } else {
//     console.log("number is even");
// }

// let a = 11;
// let result = (a % 2 === 0 ? "number is odd" : "number is even")
// console.log(result);

// if (a / b === 0) {
//     console.log("number is devide by 2");
// } else if (a > b) {
//     console.log("number is devide by 5 ");
// } else if (a / 4) {
//     console.log("number is devide by 4");
// } else {
//     console.log("number is wrong");
// }

// let a = 10
// let b = 10

// let c = "/"
// if (c === "-") {
//     console.log(a - b);
// } else if (c === "+") {
//     console.log(a + b);
// } else if (c === "*") {
//     console.log(a * b);s
// } else if (c === "/") {
//     console.log(a / b);
// } else {
//     console.log("wrong");
// }

// let o = '&'
// let a = 10
// let b = 10

// switch (o) {
//     case '+': console.log(a + b);
//         break;
//     case "-": console.log(a - b);
//         break
//     case "*": console.log(a * b);
//     default:
//       console.log("plese enter valid number");
// }

// Nullish coalescing operator '??'

// let a = true;
// if (a) {
//     console.log("price is done");
// } else {
//     console.log("not fund");
// }

// let b = (a === true ? "cool" : "not cool")
// console.log(b);

// console.log(a ?? 0);

// for (let a = 3; a <= 11; a*2) {
//     console.log(a);
// }

// var a = 4
// for (var b = 1; b <= 10; b++) {
//     let result = a * b
//     console.log(result);
// }
// let array = [10, 20, 30, 40, 50];
// for (let a = 0; a < array.length; a++) {
//     console.log(array[a]);
// }

// let array = ["apple", "mango", "banana"]

// for (let a = 0; a < array.length; a++) {
//     console.log(array[a]);
// }

// let str = "hello world";
// for (let a = 0; a < str.length; a++) {
//     console.log(str[a]);
// }

// let a="jai shree ram"
// for(let b=0;b<a.length;b++)
// {
//     console.log(a[b]);
// }

// for in loop

// let array = [10, 20, 30, 40];

// for (const key in array) {
//     console.log(array[key]);

// }

// let obj = {
//     firstName: "hello",
//     lastName: "world"
// }
// for (const key in obj) {
//     console.log(obj[key]);
// }

// let str = "hello world how do you do"
// for (const key in str) {
//     console.log(str[key]);
// }

// for of loop

// let array = [10, 20, 30, 40]
// for (const a of array) {
//     console.log(a);
// }

// let str = "hello world"
// for (const a of str) {
//     console.log(a);
// }


// for (let row = 1; row <= 3; row++) {
//     for (let col = 1; col <= 3; col++) {
//         if (col <= row)
//             document.write("*")
//     }
//     document.write("<br>")
// }
// for (let row = 1; row < 4; row++) {
//     for (let col = 1; col < 4; col++) {
//         if (col <= row) {
//             document.write("*")
//         }
//     }
//     document.write("<br>")
// }
// let a = 0
// let b = 0

// for (a; a <= 5; a++) {
//     for (b; b <= a; b++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }
// while loop

// let a = 1;
// let b = prompt("enter number20")
// while (a <= 10) {
//     let c = a * b
//     console.log(c);
//     a++
// }
// let array = [10, 20, 30, 40];
// let index = 0;
// while (index < array.length) {
//     console.log(array[index]);
//     index++
// }

// let str = "hello world";
// let str2 = 0
// while (str2 < str.length) {
//     console.log(str[str2]);
//     str2++
// }

// let a = 10

// do {
//     console.log("number " + a);

// } while (a > 10);

// let a = 12345678901;
// let c = 0
// while (a != 0) {
//     c++

//     a=parseInt(a / 10)

//     console.log(a);
// }

// console.log(c);

// let array = [10, 0, 30, 40]
// let array2 = array.reverse()
// console.log(array.reverse());


// let array = [10, 0, 30, 40, 10, 20]
// console.log(array.filter());


//============================  Function'S  ========================

// function a(a, b) {
//     console.log(a + b);
// }
// a(20, 30)
// a(10,5)

//local variable

// function add(a,b) {
// let sum=a+b
//     console.log(sum);
// }
// add(20,10)

// outer variable
// function test() {
//     let a = 10
//     let b = 10
//     function t() {
//         console.log(a + b);
//     }
//     t()
// }
// test()

// let sum = 0
// function test(a, b) {
//     sum = a + b
// }
// test(20, 30)
// console.log(sum);

// function test(a, b, c = 0) {
//     console.log(c);
//     console.log(a + b + c);
// }
// test(20, 30)

// returning a value function==============

// function test(a, b) {
//     return a + b
// }
// let a = test(20, 10)
// console.log(a);

// let addition = function (a,b) {
// console.log(a+b);
// }
// addition(10,20)

// let addition = (a, b) => {
//     console.log(a + b);
// }

// addition(10, 20)

// callback function---------------------

// function test(a, b, func) {
//     func(a, b)
// }
// test(20, 30, function (a,b) {
//     console.log(a * b);
// })


// function testing(a, b, fun) {
//     fun(a, b)
// }
// testing(20, 30, function (a, b) {
//     console.log(a + b);
// })
let array = [10, 20, 30, 40]





















