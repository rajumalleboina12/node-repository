var names = (arg1, arg2) => {
  console.log(arg1 + arg2);
};

var names1 = (arg1, bcd, cdb) => {
  arg1(3, 4);
  console.log(5, 7);
};

names1(names, 5, 6);
//console.log(str);
