// globle scope
let a = "hello";  // globle variable
function f1() {
    console.log(a);
}
f1(); // hello


// local scope
let str1 = "hello";
function f2() {
    let str2 = "World"   // local variable
    console.log(str1 + str2);
}
f2();
console.log(str1 + str2); // can't access str2 here