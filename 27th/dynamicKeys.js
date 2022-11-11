/*var data = {};

function setKeyAndValue(key, value) {
  //console.log(key);
  data[key] = value;
}

setKeyAndValue("name", "dhoni");
setKeyAndValue("type", "player");
console.log(data);

var players = {};

function addPlayers(key, player) {
  players[key] = player;
}

function getPalyer(key) {
  return players[key];
}

addPlayers(1, { id: 10, name: "dhoni", category: "keeper" });
addPlayers(2, { id: 10, name: "virat", category: "keeper" });
addPlayers(3, { id: 10, name: "sachin", category: "keeper" });
console.log(players[3]);
players[3].name = "Osama";
players[3].id = 420;
console.log(players[3]);
//console.log(getPalyer(2));
---------------------------------------------*/

var employees = [
  { id: 1, sal: 150, lastPaidDate: "2021-03-01" },
  { id: 2, sal: 450, lastPaidDate: "2021-01-01" },
  { id: 3, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 4, sal: 650, lastPaidDate: "2020-12-01" },
  { id: 5, sal: 350, lastPaidDate: "2021-02-01" },
  { id: 6, sal: 750, lastPaidDate: "2021-03-01" },
];

//assignment by using reduce
var dates = {};
due = employees.reduce((preValue, emp) => {
  if (emp.lastPaidDate in dates) {
    return preValue.lastPaidDate;
  }
  return preValue;
}, 0);

console.log(due);

/*var employee = {};
//method-1
employees.forEach((element) => {
  if (employee[element.lastPaidDate] == undefined) {
    employee[element.lastPaidDate];
  }

  employee[element.lastPaidDate] += employee.sal;
});

console.log(employee);*/

/*var dates = {};

employees.forEach((emp) => {
  if (emp.lastPaidDate in dates) {
    dates[emp.lastPaidDate] += emp.sal;
  } else {
    dates[emp.lastPaidDate] = emp.sal;
  }
});

console.log(dates);*/
