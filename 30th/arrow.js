// function welcomePeople(people: string | string[]) {
//   if (Array.isArray(people)) {
//     console.log("hello " + people.join(" and "));
//   } else {
//     console.log("welcome lone traveller" + people);
//   }
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "triangle":
            return shape.sideLength * 10;
    }
}
console.log(getArea({ kind: "circle", radius: 5.5 }));
console.log(getArea({ kind: "square", sideLength: 2 }));
console.log(getArea({ kind: "triangle", sideLength: 4 }));
