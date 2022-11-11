//filter employees based on currency - INR,GBP
var employees = require("./employees.json");
/*employees.forEach((emp) => {
  if (emp.currency == "INR" || emp.currency == "GBP") {
    console.log(emp);
  }
});*/
var expectedCurrencies = ["INR", "GBP"];
var empList = employees.filter((emp) =>
  expectedCurrencies.includes(emp.currency)
);

//empList = empList.sort((e1, e2) => e1.salary - e2.salary);

empList.forEach((emp) => {
  console.log(emp.id + " " + emp.name + " " + emp.salary + " " + emp.currency);
});
