function Sub(arg1, arg2){
    console.log(arg1-arg2);
}

function nameFunction(){
      return Sub;
}
function Add(arg1){
    var out=arg1();
    out(5,2);
}

Add(nameFunction);