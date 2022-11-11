// function welcomePeople(people: string | string[]) {
//   if (Array.isArray(people)) {
//     console.log("hello " + people.join(" and "));
//   } else {
//     console.log("welcome lone traveller" + people);
//   }
// }

// const people = ["kavya", "renu", "avinash", "raju"];
// const user = "affruddin";

// welcomePeople(user);
// welcomePeople(people);

// function logValue(msg: string | Date) {
//   if (msg instanceof Date) {
//     console.log("date-->" + msg.toUTCString());
//   } else {
//     console.log("string--->" + msg.toUpperCase());
//   }
// }

// logValue(Date());
// logValue(new Date());

// type point = {
//   x: number;
//   y: number;
// };

// function printCoord(pt: point) {
//   console.log("x value :" + pt.x + " y value :" + pt.y);
// }

// printCoord({ x: 123, y: 345 });

//interface
// interface Point {
//   x: number;
//   y: number;
// }

// function printCoord(pt: Point) {
//   console.log("x value :" + pt.x + " y value :" + pt.y);
// }

// printCoord({ x: 555, y: 666 });

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triangle":
      return shape.sideLength * 10;
  }
}

console.log(getArea({ kind: "circle", radius: 5.5 }));
console.log(getArea({ kind: "square", sideLength: 2 }));
console.log(getArea({ kind: "triangle", sideLength: 4 }));
