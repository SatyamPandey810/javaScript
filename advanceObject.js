// Propery flags and descriptors

// Property flags
// writable - if true the value can be changed
// enumerable- if true then listed in loop
// Non-writable
// Non-enumerable
// Non-configurable



// Object.getOwnPropertyDescriptors
// let object = {
//     firstName: "hello world"
// }
// let a = Object.getOwnPropertyDescriptor(object, "firstName")
// console.log(a);

// Object.difineProperty
// let object = {
//     firstName: "hello world"
// }
// Object.defineProperty(object, 'firstName', { writable: false })
// let a = Object.getOwnPropertyDescriptor(object, "firstName")
// console.log(a);
// object.
//     firstName = "deepk"
// console.log(object);

// configurable - if true the property can be deleted
// let object = {
//     firstName: "hello world",
//     age:10
// }
// Object.defineProperty(object, 'age', { configurable: false })
// console.log(object);
// delete object.age


// enumerable
// let object = {
//     firstName: "hello world",
//     age:10
// }
// Object.defineProperty(object, 'age', { enumerable: false })
// for (const key in object) {
//     console.log(key,object[key]);
// }

// Getters and setters

// accessor descriptors
// get - a function without arguments 
// set - a function with one argument

// setter

// let object = {
//     firstName: "hello world"
// }
// object.firstName="jhon"
// object['firstName']="deepak"
// console.log(object);

let object = {
    firstName: "hello world",
    setfirstName: function (value) {
        this.firstName = value
    }
}

object.setfirstName('jhon')
console.log(object);