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



//stop at private var and functions