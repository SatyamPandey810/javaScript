// computed properties

// let a = prompt('enter property')

// let obj = {
//     [a]: "testing"
// }
// console.log(obj);

// let a = "Hello world"

// let obj = {
//     [a]: a
// }
// console.log(obj);

// let a = "testing"
// let b = "hello world"

// let obj = {
//     [a]: a,
//     b: b
// }
// console.log(obj);

// let obj={
//     name:"hello world"
// }
// console.log('name' in obj);


// let obj={
//     firsname:"deepsak",
//     lastName:'singh'
// }
// console.log('firsname'in obj);
// console.log('lastname'in obj);

// let obj = {
//     name: "hello world",
//     lastName: "satyam",
//     age: 10
// }
// for (const key in obj) {
//     console.log(key, obj[key]);
// }

// primitive data type

// let a = 10
// let b = a
// b = 20
// console.log(a);
// console.log(b);

// let num = 10
// let num1 = num
// num1=40
// console.log(num);
// console.log(num1);

// reference data type

// let array = [10, 20, 30, 40];
// let array2 = array
// array2[array2.length] = 50

// console.log(array);
// console.log(array2);

// objec comparison

// let obj = {}
// let obj1 = obj
// console.log(obj === obj1);

// merge----------

// let object = {
//     firstName: "jhon",
//     firstName: "hello world"
// }
// console.log(object);
// let object = {
//     firstName: "jhon",

// }
// let object2 = {
//     age: 10,
//     hobbies: ["cricket", "football"]
// }
// object.age = object2.age
// console.log(object);

// for (const key in object2) {
//     object[key] = object2[key]
// }
// console.log(object);

// Object.assign(object,object2)
// console.log(object);

// clonning

// let a = {
//     firstName: 'hello world',

// }
// let b = a
// console.log(b);

// let a = {
//     name: "hello world"
// }
// let b = structuredClone(a)
// console.log(a);
// console.log(b);
// console.log(b ===  a);

// Garbage Collection==========(unused data deleted)      

// this keyword

// let obj = {
//     firstName: "hello world",
//     getTest: function () {
//       console.log(this.firstName);
//         this.getName()
//     },
//     getName: function () {
//         console.log(this);
//         console.log('kjhgfdfghj');
//     }
// }
// obj.getTest()

// Constructor <<=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=^=>>

// function Test() {
//     this.name = "testing"
//     this.testing = () => {
//         return this.name
//     }
//     //  return {
//     //     firstName:"hello world"
//     //  }
// }
// let d = new Test()
// console.log(d);
// console.log(d.testing());

// Optional Chaining

// The "non-existing property" problem
//Short-circuiting
// let obj = {
//     name1: {
//         firstName: "hello world"
//     }
// }

// console.log(obj.name?.firstName);

//Optional chaining
// let object={
//     name:{
//         firstName:"hello world"
//     },
//     array1:[10,20,30]
// }

// console.log(object.array?.[0]);
//Other variants
// let object = {
//     name: {
//         firstName: "hello world"
//     },
//     array1: [10, 20, 30],
//     testings() {
//         console.log('hello world');
//     }
// }
// object.testing?.()

/* Symbol type

 Symbol
"Hidden" properties
Symbol in an object literal
symbols are skipped by for_in*/

// let sym = Symbol("id")

// console.log(sym.description);

// let sym = ('id')
// let sym1 = sym
// // sym1 = Symbol("hello worls")
// console.log(sym1);
// console.log(sym);
// console.log(sym === sym1);

// let sym = Symbol.for("id")
// let sym1 = Symbol.for('id')

// console.log(sym);
// console.log(sym1);
// console.log(sym === sym1);

// global symbol
// symbol.keyfor 

// let sym = Symbol.for("key")
// let sym1 = Symbol.for('key')

// console.log(Symbol.keyFor(sym));
// console.log(Symbol.keyFor(sym1));

// let sym = Symbol('id')
// let object = {
//     name: "deepak",
//     [sym]: 10
// }
// console.log(object);
// console.log(object[sym]);
// for (const key in object) {
//     console.log(key, object[key]);
// }

//===============================================




