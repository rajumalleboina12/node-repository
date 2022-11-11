//----> type inference.
//let a:string='hello';

//a=123; ---> this is not a valid

function calculateLength(x: string, y: string) {
  let totalLength = x.length + y.length;
  return totalLength;
}

calculateLength("raju", "proclink");
