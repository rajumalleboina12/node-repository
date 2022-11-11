// // //! Immutability demo
// // //* Strings
// // let myString = "I am immutable";
// // //console.log(myString);
// // // // Direct Mutating
// // myString[2] = "M";
// // //console.log(myString)
// // // // Slicing
// //  let new_string = myString.slice(0,2) + "M" + myString.slice(3);
// //  console.log(new_string);
// //  console.log(myString);
// //* Arrays
// // // Sort array
// //  let arr = [2, 1, 4, 3];
// //  console.log(arr)
// //  let new_arr = arr.sort()
// //  console.log(new_arr)
// //  console.log(arr)
// //* slice and sort array method
// // // Number of days worked in a week
//  var hoursWorked = [7, 7, 5, 2, 0];
//  //console.log(hoursWorked);
// // // Slice for 3 days work hours
//  var workHoursfor3Days = hoursWorked.slice(0,3);
// //  console.log(workHoursfor3Days);
// //  console.log(hoursWorked);
// // // Sorting the hours worked
//  var sortedHours =  hoursWorked.sort()
//  console.log(sortedHours);
//  console.log(hoursWorked);
// // // Slice for 2 days work
// // workFor2days = hoursWorked.slice(0,2);
// // console.log(workFor2days)

// //* map and filter array method
// // let a = [1, 2, 3, 4, 5];
// // // Map array with each value subtracted with 1
// // // let b = a.map(x => x-1);
// // // console.log(b);
// // // console.log(a);
// // //* Objects
// // const supportedLanguages = {
// //   af: {1: "new"},
// //   bn: "Bengali",
// //   de: "German",
// //   en: "English",
// //   fr: "French",
// // };
// // console.log(supportedLanguages);
// // // // Change value of a key
// //  supportedLanguages.af = "HELLO";
// //  supportedLanguages.bn = 12312;
// //  console.log(supportedLanguages)
// // // //* Freeze method
// //  Object.freeze(supportedLanguages);
// // // // Add a new property
// //  supportedLanguages.hb = "Something"
// // // // Modify an existing property
// //  supportedLanguages.af = "hello"
// // // // Delete a property
// //  delete supportedLanguages.bn;
// //  console.log(supportedLanguages)
// //* Freeze an array
//  const senses = ["touch", "sight", "hearing", "smell", "taste"];
//  senses.push("New element")
//  console.log(senses)
//  Object.freeze(senses);
//  senses.pop();

//* Assign object method
const GFG = {
  article: "javascript",
  date: "30/05/2022",
};
// // Copy(?) the object to a new object
//  const newGFG = GFG;
// // // Change the value of a key
//  newGFG.article = "typescript"
//  console.log(newGFG);
//  console.log(GFG);
// // Use Object.assign to copy the object to a new object
const gfg2 = Object.assign({}, GFG);
console.log(gfg2);
gfg2.article = "bun";
console.log(gfg2);
console.log(GFG);
