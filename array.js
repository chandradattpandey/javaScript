// arrays

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


//push
let fruits1 = ["Apple", "Orange", "Plum"];
fruits1.push('mango');
console.log(fruits1);

//pop
let fruits2 = ["Apple", "Orange", "Plum"];
fruits2.pop();
console.log(fruits2);


// unshit
fruits2.unshift('mango', 'banana');
console.log(fruits2);


// shift
fruits2.shift();
console.log(fruits2);

// ******* array methods *******

// concat() method

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// fill() method

const arr4 = [10, 20, 30, 40, 50];
const fillArr = arr4.fill(0, 2, 4);
console.log(fillArr);
const fillArr2 = arr4.fill(1, 2);
console.log(fillArr2);
const fillArr3 = arr4.fill(2)
console.log(fillArr3);


// filter() method

const newArr = arr3.filter(a => a % 2 == 0);
console.log(newArr);


// forEach()

const newArr2 = newArr.forEach(a => {
    console.log(a * 2)
});


// slice()
const arr5 = [5, 6, 4, 99, 87, 32, 45, 33];
const sliceArr = arr5.slice(2);
console.log(sliceArr);
const sliceArr2 = arr5.slice(3, 6);
console.log(sliceArr2);
const sliceArr3 = arr5.slice(1, -4);
console.log(sliceArr3);

// splice()

const fruit = ['mango', 'apple', 'banana', 'grapes'];
const spliceArr = fruit.splice(2, 1, 'orange');
console.log(spliceArr);

