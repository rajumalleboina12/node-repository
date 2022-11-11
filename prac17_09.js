//var array = [10, 20, 40, 50, 20, 40, 30, 10];

//let temp = [];

/***This is to neglect repeated array elements***/
/*array.map((values) => {
  if (temp.includes(values) == false) {
    temp.push(values);
  }
});*/

/***This is to get duplicate elements in an array  */
/*let findDuplicate = (array) =>
  array.filter((values, index) => array.indexOf(values) !== index);
temp = findDuplicate(array);
console.log(temp);

array.map((values, index) => {
  if (array.indexOf(values) == index) {
    temp.push(values);
  }
});
console.log(temp);

let array = [12, 42, 33, 71, 80, 90];

let temp = [];
array.map((value) => {
  if (value % 2 == 0) {
    temp.push(value);
  }
});
console.log(temp);*/

let num = 5;

var fact = 1;
for (var i = 1; i <= num; i++) {
  fact = fact * i;
}

console.log(fact);
