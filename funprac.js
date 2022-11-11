/*function myFunction(par1, par2) {
  return par1 * par2;
}

var action = (arg) => {
  console.log(arg(3, 5));
  acting();
};

action(myFunction);

function acting() {
  console.log("acting good");
  //var abc = add;
  add(3, 4);
  div(100, 2);
}

function add(a1, a2) {
  console.log(a1 + a2);
}

var perform = (arg1, arg2, arg3) => {
  console.log(arg1(3, 9), arg3(15, 2));
  arg2(10, 5);
};

perform(mul, div, percent);

function mul(a3, a4) {
  return a3 * a4;
}
function div(a5, a6) {
  console.log(a5 / a6);
}
function percent(a7, a8) {
  return a7 % a8;
}*/

let add1 = (arg1, arg2, arg3 = 3) => {
  return arg1 + arg2 + arg3;
};

let values = add1;
console.log(values(3, 4, 5));
