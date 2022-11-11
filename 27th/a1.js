var employees = [
  { id: 1, sal: 150, lastPaidDate: new Date(2021, 3, 1) },
  { id: 2, sal: 450, lastPaidDate: new Date(2021, 2, 1) },
  { id: 3, sal: 350, lastPaidDate: new Date(2021, 2, 1) },
  { id: 4, sal: 650, lastPaidDate: new Date(2021, 3, 1) },
];

var march1st = new Date(2021, 3, 1);
/*var currentDue = 0;
//method-1
employees.forEach((element) => {
  if (new Date(element.lastPaidDate) < march1st) {
    currentDue = currentDue + element.sal;
  }
});

console.log(currentDue);*/

//method-2
due = employees.reduce((preValue, emp) => {
  if (new Date(emp.lastPaidDate) < march1st) {
    return emp.sal + preValue;
  }
  return preValue;
}, 0);

console.log(due);
