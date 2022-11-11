var employees = require("./employees.json");
/*var currenciesListed = {};
var empList = employees.filter((emp) => {
  if (!(emp.currency in currenciesListed)) {
    currenciesListed[emp.currency] = false;
    return true;
  }
  return false;
});*/

const currenciesListed = {};
const empList = employees.filter((emp) => {
  if (currenciesListed[emp.currency] === true) {
    currenciesListed[emp.currency] = false;
    return true;
  } else {
    currenciesListed[emp.currency] = true;
    return false;
  }
});

empList.forEach((emp) => {
  console.log(emp.id + " " + emp.name + " " + emp.salary + " " + emp.currency);
});
