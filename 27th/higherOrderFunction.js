function magic(fun1, fun2) {
  var xReturnValue = fun1;
  var yReturnValue = fun2;
  return function (sal) {
    return xReturnValue + yReturnValue + sal;
  };
}

function x() {
  console.log("x function");
  return "x() ";
}

function y() {
  console.log("y function");
  return "y() ";
}

//var a = connect(x, y);
//console.log(a(20000));
console.log(magic(x(), y())(20000));
