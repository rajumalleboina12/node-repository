//rest operator rest operator puts the rest of some specific user-supplied values into a JavaScript array
function printMyName() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    console.log(values);
}
printMyName("Raju", "Malleboina", "Avinash", "Guntupalli");
