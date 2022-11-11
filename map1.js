/*const method = (arg1, arg2) => {
  return arg1 + arg2;
};

//method(1, 2);
var method1 = (arg1, arg2) => {
  console.log(arg1(3, 5), arg2);
  //console.log(arg2);
};
method1(method, 6);*/

let laptop = {
  cpu: "i9",
  ram: 16,
  brand: "hp",

  greet: (fun = () => {
    console.log("hello");
  }),
};

console.log(laptop.greet());
