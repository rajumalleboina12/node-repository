// interface A {
//   age: number;
// }

// interface B {
//   age: number;
// }

// let a: A = { age: 21 };
// console.log(a.age);

// let b: B = a;
// console.log("b age --->" + b.age);
// interface Profile {
//   readonly name: string;
//   age?: number;
// }

// let profile: Profile = {
//   name: "raju",
//   age: 23,
// };

// console.log(profile.name + "  age is  " + profile.age);

// interface Sum {
//   (a: number, b: number): number;
//   city: string;
// }
// const sum: Sum = (a, b) => a + b;
// sum.city = "Vizag";
// console.log(sum.city);
// console.log(sum(10, 20));

// interface P {
//   x: number;
// }
// interface Q extends P {
//   y: number;
// }
// interface R extends Q {
//   z: number;
// }

// const abc: R = { x: 1, y: 2, z: 3 };

// console.log(abc.x + " " + abc.y + " " + abc.z);

//Overloading : ----->

function calArea(width: number, height: number): number;
function calArea(length: number): number;

function calArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}

console.log(calArea(3));
console.log(calArea(4, 5));
