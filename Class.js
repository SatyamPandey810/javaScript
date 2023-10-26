// clss basic syntax
// The "class" syntax
// what is a class
// class expression
// getters/setters
// computed names[...]
// class fields
// Making bound methods with class fields

// class Cat {
//     name = "mew";
//     test() {
//         console.log('i am testing');
//     }
// }
// let cat = new Cat()

// console.log(cat);
// cat.test();

// constructor
// class Dog {
//     name = "Jurman sheford";
//     model = "desi"
//     constructor(vlaue, model) {
//         this.name = vlaue
//         this.model = model
//     }
//     test() {
//         console.log(this.name);
//     }
// }
// let dog = new Dog('bufflo', "murra")
// console.log(dog);

// Class Expression
// let Dog = class {
//     name = "jurman sefford"
// }
// let dog = new Dog()
// console.log(dog);

// Setter/getter

// getter
//  class Dog{
//     name="germon sefford";
//     test(){
//       return this.name
//     }
//     get getname(){
//         return this.name
//     }
//  }
// let dog=new Dog()

// console.log(dog.name);
// console.log(dog['name']);
// console.log(dog.test());
// console.log(dog.getname);

// Setter
// class Dog {
//     name = "germon sefford";
//     constructor(nm) {
//         this.name = nm
//     }
//     test(a) {
//         return this.name = a;
//     }
//     set setName(value) {
//         return this.name = value
//     }
// }
// let dog = new Dog('dog')

// console.log(dog);
// dog.name = "dog"
// console.log(dog);

// dog.test('dog');
// console.log(dog);

// dog.setName="dog"
// console.log(dog);
// console.log(dog.setName);

// The "Extends" keyword
// Overriding a method
// Overriding constructor

// Class inheritance

// class A {
//     name = "hello world";
//     getname() {
//         return this.name
//     }

// }
// class B extends A {

// }
// let c = new B()
// console.log(c.name);
// console.log(c.getname());

// Method overloading
// class A{
//     test(){
//         console.log("i am test");
//     }
//     test(){
//         console.log("i am testing");
//     }
// }
// let a= new A()
// console.log(a);

// Super

class A {
    firstName;
    age = 10
    constructor(name) {
        this.firstName = name
    }
    getName() {
        console.log(this.age);
        return this.name

    }
}

class B extends A {
    age = 13
    constructor(name) {
        super(name)
    }
    getName() {
        console.log(super.age);
        return this.firstName + "child"
    }
}
let b = new B('hello world')
console.log(b);
console.log(b.getName());

// with the help of super method we can excess the parent class constructor
// with the help of super object we can excess parent class method
// we can not excess the parent class properties if we had overrided the parent properties in child class