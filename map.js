/*var students = [
  { name: "renu", age: 28 },
  { name: "syama", age: 23 },
];

let raju = (arg1, arg2, arg3) => {
  console.log(arg1, arg2);
};

students.map(raju);

//console.log(students.map(raju));

/*var mapMethod = (value, index) => {
  console.log("Hi Good morning", value, index);
};

students.map(mapMethod);

//or
students.map((item, index) => {
  console.log("Hi Good morning", item["name"], item["age"]);
});

var numbers = [23, 56, 78, 54, 32];
numbers.map((value, index) => {
  console.log(value + 5, index);
});*/

let array = [1, 4, 5, 6];

array.forEach((x) => console.log(x * x));

let abc = array.map((x) => x * x);
console.log(abc);
