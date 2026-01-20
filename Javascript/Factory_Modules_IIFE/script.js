console.log("Closures");
// Closures are combination of functions bundled with references to its surrounding states(lexical environment)
//This allows function to access its outer scope.

//LEXICAL SCOPING

function outerFX(arg){
    let outerVar = arg; // variable in outer scope but still accessible by inner FX
    function innerFX(){
        console.log(outerVar);
        let innerVar ="Name: " + outerVar;
        console.log(innerVar);
    }

    const inner2 = ()=>{
        console.log("Inner 2 " + outerVar);
    }

    innerFX();
    inner2();
}

outerFX("Daus");


//CLOSURE

//in essence makeName is a function factory
function makeName(name){
    let intro = `My name is ${name}`;
    
    function showName(){
        console.log(intro);
    }

    return showName;
}

const callName = makeName("David");

callName();


console.log("--- FACTORY FUNCTIONS ---")
//FACTORY Functions
// instead of using new keyword to create obj from constructors,
// factory set up and return the new obj when you call said FactoryFX
// cons- doesnt use prototype which will incur performance penalty
//      if you create obj in thousands

//this is a constructor function
const User = function(name){
    this.name = name;
    this.userName = "@" + name;
}
// let newUser = new User("David");


//this is factory function
function createUser(name){
    const userName = "@"+name;
    return {name, userName}; //obj shorthand notation from {name:name, userName:userName}
}
let newUser = createUser("David");

//PRIVATE VARIABLES N FX
console.log("Private variables and functions");

function createVehicle(type){
    const vehicleType = type;
    let coordinate = [0,0];  //PRIVATE VARIABLE

    const moveTo = (x,y)=>{
        coordinate[0] = x;
        coordinate[1] = y;
    }

    const resetPosition = ()=>{
        coordinate[0] = 0;
        coordinate[1] = 0;
    }

    const showPosition = ()=>coordinate;

    return {vehicleType, moveTo, resetPosition, showPosition};
}

const car = createVehicle("car");
console.log(car);
console.log(car.vehicleType);
car.moveTo(10,20);
console.log(car.showPosition());
// console.log(car.resetPosition());
// console.log(car.showPosition());


//private variables can also be implemented using constructor fx by defining 
//a fx to access the "private property" inside the constructor, instead of on the 
// prototype. 
// However, this would make it non-inheritable which defies the use of constructors.

//Using prototypal inheritance with factories
console.log("Prototypal inheritance with Factory FX");
//we extend the createVehicle to createWaterVehicle

function createWaterVehicle(type){
    //prototypal inheritance in factory
    const {vehicleType, moveTo,resetPosition, showPosition} = createVehicle(type);
    let radio = true;
    const turnOnRadio = ()=>{
        radio = true;
        return radio;
    };
    const turnOffRadio = ()=>{
        radio = false;
        return radio;
    };

    return {vehicleType, turnOffRadio, turnOnRadio,moveTo,resetPosition,showPosition};
}

const boat = createWaterVehicle("boat");
console.log(boat.vehicleType);
console.log(boat.turnOffRadio());
boat.showPosition();
boat.moveTo(10,20);
console.log(boat.showPosition());

//can also use object.assign to add on properties you want

function createAirVehicle(type){
    const vehicle = createVehicle(type);
    let flyStatus = true;

    const checkStatus = ()=>flyStatus;
    const noFly = ()=>{
        flyStatus = false;
        return flyStatus;
    }
    const yesFly = ()=>{
        flyStatus = true;
        return flyStatus;
    }
    return Object.assign({},vehicle,{checkStatus,noFly,yesFly});
}

const airplane = createAirVehicle("airplane");
console.log(airplane);
console.log(airplane.vehicleType);
console.log(airplane.checkStatus());
console.log(airplane.noFly());

// MODULES (IIFE)
console.log("-------- MODULES - IIFE ---------");
// immediately invoked function EXPRESSION
// from the name, it is a function expression defined and 
// immediately invoked/called

// (function expression with return like factory)(); 

//the module pattern is good for encapsulation/ wrapping sections of
// code. sort of like namespacing to avoid naming collisions in our programs. 
//modules encapsulate (bindling data, code or something into a single unit)
//  with selective access to that unit.


// const myModule = (fx expression)();
const myModule = (function(){
    const add = (a,b)=>a+b;
    const subtract = (a,b)=>a-b;
    const multiply = (a,b)=>a*b;
    const divide = (a,b)=>a/b;

    return {add,subtract,multiply,divide}
}
)();

function add(a,b){return a+b};

console.log(myModule.add(10,100));
console.log(myModule.subtract(320,100));
console.log(myModule.multiply(5,7));
console.log(myModule.divide(100,10));
console.log(add(32,50));                //this add will not have naming conflict


// 3 kinds of prototypal inheritance
console.log("3 kinds of prototypal inheritance");
console.log("1. Delegation/Differential Inheritance");
//------   1. Delegation/ Differential Inheritance  ----------------
// Objects that serves as a base for another object
//   objects that inherit another object, gets a reference to its prototype
//  accessing a property will result in first checking its own obj and then it
// checks the [[prototype]] and so on up the protoype chain until 
// Object.prototype(root of method delegation for most objects)
// Method delegation can help preserve memory resources as only one copy of each method
// is needed and shared by its instances instead of defining them in each instances
// some ways to implement
// 1. using class by putting in the method as methodName(){statements;} below the 
//     class constructor.
//      However it is said that there are problems with class inheritance in JS especially
//      when we extend classes, its not recommended
// 2. Using constructor function and setting
//    ConstructorName.prototype.methodName = function(){statement;}
// 3. using Factory functions and Object.create()
//      create a proto obj const proto={method(){}}
//      const greeter = (name) => Object.assign(Object.create(proto), {name});
//      const newInstance = greeter("SomeName");
//      newInstance.method() can now be called 

//      to avoid property/method delegation, set prototype to 'null'
//      by using Object.create(null);

// DISADVANTAGES of delegation is not good for storing state
//      If states are stored as objs/arrays, mutating any member of said 
//      arr/obj will mutate every instance that shares the prototype

//      to preserve instance safety, each obj must have a copy of the state


// the other two inheritance can be seen here : https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9

//  FAVOR COMPOSITION OVER INHERITANCE !!!!!!