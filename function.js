// function 

function sayHello(){
    console.log('hello javaScript');
}
sayHello();

// Function declaration  with parameter
function sum(num1, num2) {
    total = num1 + num2;
    console.log(total);
}

sum(13, 25);


// Function Expression
const person = function (age) {
    if (age <= 18) {
        console.log('this is a boy');
    } else if ((age >= 19) && (age <= 60)) {
        console.log('this is a man');
    } else {
        console.log('this is a old');
    }
}

person(61)


// arrow function
const greaterValue = (a,b) => {
    if (a>=b){
        console.log("greater value is" + " " + a);  // using double quotes
    }else{
        console.log(`greate value is ${b}`);  // using backticks
    }
}

greaterValue(15,71)

//function as a argument

function user(name){
    return name;
}

function say(user){
    console.log('hello' + " " + user);
};


say(user('gokul'));


// diff between function and arrow function

let me = {
    name: "javaScript",
    myfunc: () => {
        console.log("My name is " + this.name); // no 'this' binding here
        console.log("My name is " + me.name);
    },
    myfunc1() {
        console.log("My name is " + this.name); // 'this' binding works here 
    }
};
me.myfunc();
me.myfunc1();