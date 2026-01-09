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
