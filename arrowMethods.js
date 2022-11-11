const add = (arg1, arg2, sub) => {
  return arg1 + arg2 - sub;
};

var sub = (arg1, arg2) => {
  var a = arg1 - arg2;
  return add(arg1, arg2, a);
};

var res = sub(12, 10);
console.log(res);
