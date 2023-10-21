// Numbers
// Hex,binary and octal numbers
// toString
// let a = 10;

// console.log(a.toString(2));
// console.log(a.toString(8));
// console.log(a.toString(10));
// console.log(a.toString(16));


// Rounding
// Math.floor                         (skip to point value)
// let a = 10.25;
// console.log(Math.floor(a));

// Math.ceil                          (add value before point value)
// let a = 10.10;
// console.log(Math.ceil(a));

// Math.round
// let a = 10.10;                     (increse vlue after .50)
// console.log(Math.round(a));

// Math.trunc
//  let a = 10.55;                    (skip to point value)
// console.log(Math.trunc(a));

// Math.toFixed                       (fixed the value after point)
// let a = 10.30355
// console.log(a.toFixed(3));

// Imprecise calculations
// console.log(10 + 20 - false - true + "hello world");

// Tests: isFinite and isNaN
// let number = 10;
// console.log(isFinite(number));

//isNaN
// let a = NaN;
// console.log(isNaN(a));

// Math.random()
// console.log(Math.random() * 10);

// Math.pow(n,power)
// console.log(Math.pow(8, 2));

// Math.nax(a,b,c...) and Math,min(a,b,c...)

// let array = [ 10, 30, 100, 40, 50, 70]
// let array1 = Math.max(...array)
// console.log(array1);
// let a = 0
// let b = 0
// for (let index = 0; index < array.length; index++) {
//     if (array[index] > a) {
//         a = array[index]
//     } else if (array[index] > b) {
//         b = array[index]
//     }
// }
// console.log("first largest number is:", a);
// console.log("second largest number is:", b);

// Parseint and parseFloat    

// Parseint                        (use string convert to number)

// let a = '10.78';
// let b = parseInt(a)
// console.log(b, typeof b);

// parseFloat (using string to convert to number and get point value also)
// let a = "10.34"
// console.log(a, typeof a);
// let b = parseFloat(a)
// console.log(b, typeof b);

// Strings
// Quotes
// Special characters
// String length
// Accessing characters
// String are immutable(no change the any value in run time)
// Changing the case
// to upperCase
// to lowerCase

// substring
// indexOfs
// lastIndexOf
// includes, starswith, endwith
// Getting a substring
// Slice
// Substring
// substr
// Comparing string
// codePointAt
// fromCodePoint

// let a="sdfghjlkjhgfdsaasdfg"+"\nsdfghjdfghjhgfds"+"\nasdfghhgf"
// let a=`sdfghjlkjhgfdsaasdfg
// sdfghjdfghjhgfds
// asdfghhgf`

// console.log(a);


// let a = "hello world"
// console.log(a.length);
// for (const key in a) {
//     console.log(a[key]);
// }

// let a="hello world"

// let b=a.toUpperCase()
// console.log(b);

// let a ="HELLO WORLD"
// console.log(a.toLowerCase());

// Searching for a
// indexOf

// let str = "hello world"
// console.log(str.indexOf("l"));

//LastIndexOf
// console.log(str.lastIndexOf('r'));

//Accessing characters
// let a = 'Hello world'
// // console.log(a[0]);

// for (const value in a) {
//     console.log(a[value]);
// }

// include
// let a="hello world"
// console.log(a.includes('n'));

//startWith
// let a='hello world'
// console.log(a.startsWith('hi'));

//EndWith
// let a='hello world'
// console.log(a.endsWith('ld'));

//Slice
// let a="hello world"
// console.log(a.slice(0,11));

//substring
// let a = 'hello world'
// console.log(a.substring(4));

//substr
// let a = 'hello world'
// console.log(a.substr(6));

// function customSlice(inputString, startIndex, endIndex) {
//     if (startIndex < 0) {
//       startIndex = 0;
//     }
//      if (endIndex > inputString.length) {
//       endIndex = inputString.length; 
//     }
//     if (startIndex >= endIndex) {
//       return '';
//     }
//      return inputString.slice(startIndex, endIndex);
//   }

//   const text = 'Hello, world!';
//   const customSlicedText = customSlice(text, 2, 8);

//   console.log(customSlicedText);

// Comparing strings
// let a = "Hello"
// let b = "hello"
// console.log(a > b);

// CodePointAt
// let a = "hello world"
// for (const value of a) {
//     console.log(value.codePointAt()-32);
// }

// fromCodePoint
// console.log(String.fromCodePoint(90));     //(space 32 value)

// Array

// Declaration
// Method pop/push, shift/unshift
// New Array()
// Multidimensional arrays
// toString

// Array methods

// Add/remove items
// arr.push(...items) - adds item to the end,
// arr.pop()- extracts an item from the end,
// arr.shift()- extracts an item from the beginning
// arr.unShift(...items)- adds item to the beginning
// splice
// slice
// concat
// Iterate: for each
// Searching in array
// indexOf/lastIndex
// filter
// Transform an array
// map
// Short(fn)
// reverse
// split and join
// reduce/reduceRight
// Array.isArray
// let array=new Array(10,30,50)  (when give one value he create 10 empty block)
// console.log(array);

// let array = Array.from([59,49,39])
// console.log(array);

// let array=Array.of(20,40,60)
// console.log(array);

// let array = [10, 20, 30]
// array[array.length] = 40
// console.log(array);

// let array1 = array.push(200, 300)
// console.log(array1);

// let array = [10, 20, 30]
// let array1=array.pop()
// console.log(array1);

// let array = [10, 20, 30]
// let array1=array.shift()
// console.log(array1);

// let array = [10, 20, 30]
// array.unshift(5,20,"hello")
// console.log(array);

// let array = [10, 20, 30, 40, 50, 60]
//  let retur=array.splice(3,2)
// console.log(array,retur);

// let array = [10, 20, 30, 40, 50, 60]
// let array1=array.splice(0, 2, 100,100)
// console.log(array,array1);

// let array = [10, 20, 30, 40, 50, 60]
// array.splice(2,0,100,120)
// console.log(array);

// slice
// let array = [10, 20, 30, 40, 50, 60]
// console.log(array.slice(0,2));

// concat
// let array = [10, 20, 30, 40, 50, 60]
// let array1 = [70, 80, 90, 100, 110, 120]
// let array3 = [70, 80, 90, 100, 110, 120]

// let ary=array+ ' '+array1
// console.log(ary);

// let arrry2=array.concat(array1,array3)
// console.log(arrry2);


// for Each
// let array = [10, 20, 30, 40, 50, 60]
// array.forEach((value,index,arr) => {
//    console.log(value,index,arr); 
// });


// Searching in array

// let array=[10,20,30,40,50,20]
// console.log(array.indexOf(20));
// console.log(array.lastIndexOf(20));
// console.log(array.includes(20));

// find and findIndex/findLastIndex
// let array = [10, 20, 30, 40, 50, 20]
// console.log(array.indexOf(40));
// console.log(array.lastIndexOf(40));

// let array = [10, 20, 30, 40, 50, 20]
// let valu = array.find((value, index, arr) =>value === 20

// );

// console.log(valu);
// let array = [10, 20, 30, 30, 40, 50, 20]
// let a = array.filter((value, index, arr) => value === 30)
// console.log(a);

// transform array
//map
// let array = [10, 20, 30, 30, 40, 50, 20]
// let a = array.map((value, index, array) => {
//     return value * 10
// })
// console.log(a);

// short
// let array = [10, 40, 100, 80, 300]
// console.log(array.sort((a, b) => {
//     return a - b
// }));

// reverse
// let array = [10, 40, 100, 80, 300]
// let a = array.reverse()
// console.log(a);

// let originalArray = [10, 20, 30, 40, 50];
// let reversed = []; 
// function reverseArray(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// const reversedArray = reverseArray(originalArray);
// console.log(reversedArray);


// let array = [20, 30, 40, 50]
// let reverseA = []

// function reverseArray(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverseA.push(arr[i])

//     }
//     return reverseA
// }
// let a = reverseArray(array)
// console.log(a);

// toString
// let array = [10, 20, 30, 40]
// console.log(array.toString());

// split and join
// let array = [10, 20, 30, 40]

// let string = array.join('|');
// console.log(string.split('|'));

// reduce/reduce right
// let array = [10, 20, 30, 40]
// let a =0
// for (const value of array) {
//     a+=value
// }

// console.log(a);

// let a = array.reduce((prev, current) => {
//     return prev + current
// }, 0)
// console.log(a);

// let array = [10, 20, 30, 40]
// console.log(Array.isArray(array));

//Iterables
// string
// Iterables and array-likes

// let str = "hello world"
// for (const value of str) {
//     console.log(value);
// }

// let array = [10, 30, 40, 50, 60]
// for (const value of array) {
//     console.log(value);
// }

// let object={             //object is not itreables
//     firstName:"hello world"
// }
// for (const value of object) {
//     console.log(value);
// }

// Map and Set

// Map
// new map()-create the map
// let map = new Map()
// console.log(map);value

// map.set(key,value)-stores the  by the key
// map.set(1,"hello world")
// map.set(1,"hello ")
// console.log(map);

// map.get(key)-returns the value by the key,undefined
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// console.log(map.get(2));

// map.has(key)-returns true if the key exists
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// console.log(map.has(5));

// map.delete(key)-removes the valueby the key
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// console.log(map.delete(2));
// console.log(map);



// map.clear()-remove everything for the map
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// console.log(map.clear());
// console.log(map);

// map.size -returns the current element count
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// console.log(map.size,map)

// Iteration over map
// map.keys()-returnd an iterable for keys
// map.values()-returns an iterable for values
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// console.log(map.keys());
// for (const value of map.keys()) {
//     console.log(value);
// }
// console.log(map.values());

// for (const value of map.values()) {
// console.log(value);
// }

// map.entries()-returns an iterable for entries
// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// map.set(4, 40)
// for (const value of map.entries()) {
//     console.log(value);
// }

// Set
// new Set(iterable)- create the set
let set = new Set()
// console.log(set);

// set.add(value)- add a value, returns the set
// set.add(10)
// set.add(20)
// set.add(30)
// set.add(40)
// set.add(50)
// console.log(set);

// set.delete(value)- removes the value,returns true
// set.add(10)
// set.add(20)
// set.add(30)
// set.add(40)
// set.add(50)
// console.log(set.delete(20));
// console.log(set);

// set.has(value)- returns true if the value exists
// set.add(10)
// set.add(20)
// set.add(30)
// set.add(40)
// set.add(50)
// console.log(set.has(20));

// set.clear()-removes everything from the set
// set.add(10)
// set.add(20)
// set.add(30)
// set.add(40)
// set.add(50)
// console.log(set.clear());
// console.log(set);

// set.size - is the element count
// set.add(10)
// set.add(20)
// set.add(30)
// set.add(40)
// set.add(50)
// console.log(set.size);

// iteration over set
set.add(10)
set.add(20)
set.add(30)
set.add(40)
set.add(50)
for (const value of set.values()) {
    console.log(value);
    
}

