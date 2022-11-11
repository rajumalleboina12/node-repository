// interface A {
//   age: number;
// }
function calArea() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 2) {
        return args[0] * args[1];
    }
    return Math.pow(args[0], 2);
}
console.log(calArea(3));
console.log(calArea(4, 5));
