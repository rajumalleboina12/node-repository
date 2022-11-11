var employees = require("./employees.json");

employees.forEach((emp) => {
  console.log(emp.id + " " + emp.name + " " + emp.salary + " " + emp.currency);
});
