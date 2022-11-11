// pick and omit
// interface W {
//   id: number;
//   name: string;
//   category: string;
//   country: string;
// }

// type PlrPick = Pick<W, "name" | "id">;
// type PlrOmit = Omit<W, "name" | "id">;

// const p1: W = { id: 1, name: "dhoni", country: "india", category: "batter" };
// const p2: PlrPick = { id: 2, name: "virat" };
// const p3: PlrOmit = { category: "batter", country: "india" };
// console.log(p1);
// console.log(p2);
// console.log(p3);
//---------------------------------------------

// type Foods =
//   | "veg sandwich"
//   | "non veg sandwich"
//   | "burger"
//   | "alu tikki"
//   | "rice rollers"
//   | "sambar rice";
// let foodie: Foods;
// foodie = "burger";
// type NonFoodies = "veg sandwich" | "rice rollers" | "sambar rice";
// let dhoni: Exclude<Foods, NonFoodies>;
// dhoni = "alu tikki";
//console.log();
// //dhoni ='sambar rice'; error
//--------------------------------------------

interface Player {
  age: number;
  name: string;
}

type Categories = "batter" | "bowler" | "keeper";

const players: Record<Categories, Player> = {
  batter: { name: "virat", age: 30 },
  bowler: { name: "shami", age: 29 },
  keeper: { name: "pant", age: 26 },
};

console.log(players.batter);
console.log(players.bowler);
console.log(players.keeper);
