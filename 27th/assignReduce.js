var employees = [
  { id: 1, sal: 150, lastPaidDate: "2021-03-01" },
  { id: 2, sal: 450, lastPaidDate: "2021-01-01" },
  { id: 3, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 4, sal: 650, lastPaidDate: "2020-12-01" },
  { id: 5, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 6, sal: 750, lastPaidDate: "2021-03-01" },
];

//assignment by using reduce

//var ab = employees.sal + " " + employees.lastPaidDate;
//var accum = {};
/*var abc = employees.filter((curr) => {
  if (curr.lastPaidDate in accum) {
    accum[curr.lastPaidDate] += curr.sal;
  } else {
    accum[curr.lastPaidDate] = curr.sal;
  }
});


//console.log(accum);

/*var dates = {};

employees.forEach((emp) => {
  if (emp.lastPaidDate in dates) {
    dates[emp.lastPaidDate] += emp.sal;
  } else {
    dates[emp.lastPaidDate] = emp.sal;
  }
});

console.log(dates);*/

var details = employees.reduce((accum, emp) => {
  if (accum[emp.lastPaidDate]) {
    accum[emp.lastPaidDate] += emp.sal;
  } else {
    accum[emp.lastPaidDate] = emp.sal;
  }
  return accum;
}, {});

console.log(details);
