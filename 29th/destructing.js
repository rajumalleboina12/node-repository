//object detructuring and rest operator
const data = [];

function setKeyAndValue(data, { key, value }) {
  return {
    ...data,
    [key]: value,
  };
}

var obj = setKeyAndValue(data, { key: "name", value: "dhoni" });
var obj = setKeyAndValue(obj, { key: "type", value: "player" });

console.log(obj);

//array destructuring
/*const [a, b, ...c] = [10, 20, 30, 40, 50, 60, 70];

console.log(a);
console.log(b);
console.log(c);

const { price, description } = {
  title: "veg sandwich",
  price: 350,
  ingredient: ["bread", "cheese", "vegitables", "corn"],
  description: "snacks category",
};

console.log(price);
console.log(description);

const vacation = {
  destination: "delhi",
  travellers: 4,
  activity: "seminar",
  cost: "100000",
};

function vacationMarketing({ destination, activity }) {
  return `come to ${destination} first and do some ${activity} later`;
}

console.log(vacationMarketing(vacation));*/
