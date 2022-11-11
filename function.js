function nameFunction(arg1, arg2) {
    console.log("this is function");
    return arg1*arg2;
}
var out = nameFunction;
//passing result of out method.
//console.log(out());

function Add(arg1){
    console.log("Add Function",arg1(5,4))
}

Add(nameFunction);