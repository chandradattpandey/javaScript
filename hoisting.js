// test before declaring

console.log(test);   // undefined
var test;

console.log(a);
var a = 5;     // undefined


// test before declaring
var test; 
console.log(test);  // undefined


// hoisting
a = 5;
console.log(a);
var a;

// hoisting
var b;
b = 5;
console.log(b);


//  function hoisting

myfun1();

function myfun1() {
    console.log('hello javaScript');
}


myfun2();  //  error occurs because only declarations are hoisted not expression function

let myfun2 = function() {
    console.log('hello javaScript');
}