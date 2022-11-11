var employees = require("./employees.json");
/*var inr = 0;
var usd = 0;
employees.forEach((emp) => {
  if (emp.currency == "INR") {
    inr = Number(inr + emp.salary);
  }
  if (emp.currency == "USD") {
    usd = Number(usd + emp.salary);
  }
});

console.log(inr.toFixed(2));
console.log(usd);*/

var salaries = employees.reduce(
  (accumulator, emp) => {
    if (emp.currency === "INR" || emp.currency === "USD") {
      accumulator[emp.currency] += emp.salary;
    }
    return accumulator;
  },
  { INR: 0, USD: 0 }
);

console.log(
  "INR" + ":" + salaries.INR.toFixed(2) + "," + "USD" + " " + salaries.USD
);
