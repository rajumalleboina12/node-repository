let array = [
  "raju",
  "Avinash",
  "Affruddin",
  "Durgaprasad",
  "renu",
  "syama",
  "ramakrishna",
  "sharath",
  "naveen",
];

let array1 = [];
let array2 = [];
array.map((values) => {
  if (values.length <= 7) {
    array1.push(values);
  } else {
    array2.push(values);
  }
});

console.log(array1.join(":"));
console.log(array2.join(":"));
