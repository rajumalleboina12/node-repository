/*function total(x, y, z) {
  return x + y + z;
}
const nos = [1, 2, 3];
console.log("total is : " + total(nos[0], nos[1], nos[2]));
console.log("sum is " + total(...nos));*/

const dogs = ["d1", "d2", "d3", "d4"];
const cats = ["c1", "c2", "c3", "c4"];

const animals = ["tiger", dogs, "lion", cats, "elephants"];
console.log(animals);

const animals2 = ["tiger", ...dogs, "lion", ...cats, "elephants"];
console.log(animals2);
