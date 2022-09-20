console.log('hello javaScript!!');

//variable declaration

var x = 1;
var str = 'string';
console.log(x, str);

// check given number is odd or even

var num = 151;
if (num % 2 == 0) {
    console.log('given number is even')
} else {
    console.log('given number is odd')
}

// variable scop
var a = 10;  // function scope
let b = 12;  // block scope
const c = 15; // block scope

if (a >= 5) {
    console.log(a);
    console.log(b);
    console.log(c);
    let d = a;
    console.log(d);
    c = a;
    console.log(c); // c value can not be chnage
    a = b;
    console.log(a);
}
console.log(d); // d can not access here 
console.log(a);


// conditional statement

// if statement

let age = 20;
if (age > 18){
    console.log('user can vote');
}

// else-if 

let age2 = 15;
if (age2 > 18){
    console.log('user can vote');
}else{
    console.log('user can not vote');
}

// if..else-if

let days = 31;
if(days <= 7){
    console.log('it is a weeak');
}else if((days >=8) && (days <= 15)){
    console.log('it is a Fortnight');
}else{
    console.log('it is a month !!!!!!');
}