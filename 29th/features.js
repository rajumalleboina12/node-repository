//logical assignment operator
/*let x = 1;
if (x) {
  //old version
  x = 10;
}

console.log(x);

let x1 = 200;
x1 &&= 500; //x1 is assigned with new value when x1 is truthy value
console.log(x1);

let x2 = 0;
x2 ||= 600; //x2 is assigned with new value when x2 is falsy value
console.log(x2);

//Nullish coalescing & Equals (??=):   It checks if a value is null or undefined.
let x3;
let y = 30;
x3 ??= y; //x3 is undefined and right side evaluated value is assigned to x3
console.log(x3);
console.log(y);

//Es8 ---> getting only keys and values
let details = {
  name: "raju",
  age: 25,
  address: "jangaon",
};

console.log(Object.keys(details));
console.log(Object.values(details));

//-->padstart and padend
let something = "playing";
console.log(something.padStart(10, "#"));
console.log(something.padEnd(10, "#"));

//exponentiation operator
var abc = 2;
var bcd = 2;
console.log(abc ** bcd);

//Es2021 feature ----> in this case we are creating new public method throught that method we can access private #notShowMe
//Hence we can get result without creating new public method it shows error
class GfG {
  showMe() {
    console.log("I am a geek");
  }
  #notShowMe() {
    console.log("Hidden informations");
  }
  showAll() {
    this.showMe();
    this.#notShowMe();
  }
}

const gfg = new GfG();

gfg.showAll();

//Es2019 version ----> Array.flat() & Array.flatMap()
//-->Array.flat() method creates new array with all sub array element concatinated up to specified path
//-->Array.flatMap() method maps each element and result to given in a new array

var arr = [10, 30, [40, 50, [60, 70]]];
console.log(arr.flat());
console.log(arr.flat(2));

var arr1 = [1, 4, 6, 3, 2];
let a = arr1.map((arr1) => [arr1 * 2]);
console.log(a);

let a1 = arr1.flatMap((arr1) => [[arr1 * 2]]); //only one level is flattened
console.log(a1);

//TrimStart() and TrimEnd()
var str = "   raju   ";

console.log(str.length);
console.log(str.trimStart()); //trimleft
console.log(str.trimEnd()); //trimright

//in the place of mutiple callbacks we use promises , promises are way to implement asynchrous programming,
//promises are acts as container to store future values
//call backs are good to deal in small cases , while developing wed application call backs creates
// more complexity of code so that we use promises.

//promise gives the exact result of the code , syntax:
let b = 10;
var newPromises = new Promise((res, rej) => {
  if (b < 15) {
    res("hey i am sucess");
  }
  return rej("hey i am rejected");
});

console.log(newPromises);

//frezee and seal,seal does not prevents the value of obj and freeze prevents the value of object
var obj = {
  // assigns 10 to value
  value: 10,
};
// creates a non-extensible object
Object.seal(obj);
// the value gets updated to 20
obj.value = 20;
console.log(obj.value);

var obj1 = {
  // assigns 10 to value
  value1: 10,
};
// creates a non-extensible object
Object.freeze(obj1);
// updates the value
obj1.value1 = 20;
// but cannot change the existing value
console.log(obj1.value1);*/

// var obj = {
//   number: 10,
// };

// console.log(obj.number);
// obj.number++;
// console.log(obj.number);

var obj = {
  number: 10,
};

console.log(obj.number);
obj.number++;
console.log(obj.number);
