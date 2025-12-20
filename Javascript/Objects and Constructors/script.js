console.log("Notes on JS objects");

//Defining an object
//using Object constructor
const newObject = new Object();
console.log(newObject);
//master object constructor - Object()
console.dir(Object);
console.dir(Date);
console.dir(Array);


// defining an obj using object literal (best)

const personObject = {
    name:"David",
    age:30,
    "methodDriving": function(){
        console.log("Lets drive !!!!");
    }
};

//access obj through dot and bracket notation
console.log(`${personObject.name}  ${personObject.age}`);
personObject.methodDriving();

//grouping things into obj can help organize data and code


// ----- CONSTRUCTOR -------------
// new Array(), Date(), Object() - e.g. of constructors
//when there is a SPECIFIC and repeating object, create them using 
//  constructor

function PlayerConstructor(name,age,marker){
    // to prevent constructor being called as normal FX
    if(!new.target){
        throw Error("use NEW key to call constructor");
    }
    
    this.name=name;
    this.age=age;
    this.marker=marker;
    this.makeMove=function(){
        console.log(`${this.name} is moving up!`);
    }
}

// creating object from constructors

const playerOne = new PlayerConstructor("David",30,'X');
const playerTwo = new PlayerConstructor("Samuel",29,'Y');
const playerThree = new PlayerConstructor("Michael",33,'Z');

console.log(playerOne.name);
console.log(playerTwo.name);
playerOne.makeMove();
playerTwo.makeMove();
playerThree.makeMove();
// error if no new.
// const playerError = PlayerConstructor("LOL",22,"X");

//Protypal inheritance
    //obj prototype is same as 
    // constructor's(a function) prototype attribute(an object)
    //constructor is a function that creates object
console.log(Object.getPrototypeOf(playerOne) === PlayerConstructor.prototype);
    //to check object's [[prototype]] only use Object.getPrototypeOf()
    //  which is a REFERENCE to the Constructor function's prototype
//any properties/methods defined on Player.prototype can be used
//  by the objects instantiated from its constructor
//add properties/methods to the prototype so it can be inherited
//  by its objects
    
    PlayerConstructor.prototype.sayHello= function(){
        console.log(`Hello I am ${this.name}`);
    }
    console.log(PlayerConstructor.prototype);
    console.log(Object.getPrototypeOf(playerOne));
    playerOne.sayHello();
    playerTwo.sayHello();
    
//the constructor also inherits from the Object
//  hence we can use its .valueOf() method.
console.log(Object.getPrototypeOf(PlayerConstructor.prototype) === Object.prototype);
console.log(playerOne.valueOf());
// valueOf is not defined in player but in Object.prototype
//      hence we can check that valueOf is a property of Object.prototype
//      NOT player. but player obj can still use it
console.log(playerOne.hasOwnProperty('valueOf')); //false
console.log(Object.prototype.hasOwnProperty('valueOf')); //true
//hasOwnProperty is also OBJ.proto's
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); //true


//Using prototypal inheritance
//JS is a prototype based for inheritance instead of a class based like Pyhton/Java
//  makes a Player to inherit from Person. since all Player are Person

function Person(name){this.name=name;} //Person constructor
Person.prototype.introduceSelf = function(){
    console.log(`Hey, my name is the amazing ${this.name} !!! I am a Person`);
};

console.log(Person.prototype);
Object.setPrototypeOf(PlayerConstructor.prototype, Person.prototype);

console.log(PlayerConstructor.prototype);
console.log(Object.getPrototypeOf(PlayerConstructor.prototype));
//now Player[[proto]] is same as Person's
// the objects can now use methods from their constructor and Person's
playerOne.introduceSelf();
playerOne.sayHello()
playerTwo.introduceSelf();
playerTwo.sayHello();
console.log(Person.prototype.isPrototypeOf(PlayerConstructor.prototype)); //true
console.log(playerOne instanceof PlayerConstructor); //true
console.log(playerOne instanceof Person); //true
console.log(PlayerConstructor.prototype instanceof Person); //true


    //cannot be done like this
    //  Player.prototype = Person.prototype;
    // as both will become same obj in memory instead of one refers to the other


// -----------   OBJ.CREATE  --------------------
//define obj using Obj.create(prototypeObject,propertyObject)
//      great for using prototypal inheritance
//   it EXTENDS constructors to created obj like OOP inheritance (main class extends sub class)
const myNewObjCreated = Object.create(Object.prototype);
//is same as using obj literal definition
const myLiteral = {};
//create obj with no proto
const noProtoObj = Object.create(null);
console.dir(myNewObjCreated);
console.dir(myLiteral); // new object will inherit the defined prototype
console.dir(noProtoObj); // empty object, even no prototype from Object

//example
const Motorcycle = function(color){
    this.color = color;
};

const moped1 = new Motorcycle('red'); // will create an obj that has color property
const moped2 = Object.create(Motorcycle.prototype);
console.dir(moped1);
console.dir(moped2); // no color only prototype

//example
const Vehicle = function(color){
    this.color = color;
};
Vehicle.prototype = {
    getColor(){
        console.log(`My color is ${this.color}`);
    }
};

const Suv = function(driveTrain){
    this.driveTrain=driveTrain;
}

Suv.prototype = Object.create(Vehicle.prototype); 
//SUV inherit methods from Vehicle

const mySuv = new Suv('fwd');
console.dir(mySuv);
console.dir(mySuv instanceof Suv);
console.dir(Suv.prototype instanceof Vehicle);
mySuv.color = "blue";
mySuv.getColor();