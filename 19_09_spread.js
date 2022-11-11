/*var details = { name: "React", version: 17, price: { main: 100, gst: 18 } };

//details.version = 19;

var version = "version";
details[version] = 23;

//console.log(details);
// spread operator (...) is for objects and array
var data = { ...details, name1: "nodejs" };
//console.log(data);

newObj = { ...details, price: { total: 118, ...details.price } };
console.log(newObj);*/

/*****promiss - it is a predifed in js ******/

var now = 0;
var intervalId = null;
const getTemp = () => {
  console.log("Time in seconds ", now);
  now = now + 1;
  if (now == 11) {
    clearInterval(intervalId);
  }
};

intervalId = setInterval(getTemp, 1000);
setTimeout(() => {
  console.log("its before 500 ms");
}, 5000);

//object and class
/*
const onAttack = (live) => {
  console.log("Attack on this", live);
};

const onGetLive = (live) => {
  console.log("Myliveis", live);
};

class Game {
  constructor(live, method) {
    this.live = live;
    this.method = method;
    //this.getliveMethod = getliveMethod;
  }
  attack() {
    this.live = this.live - 1;
    this.method(this.live);
  }
  getMylive() {
    onGetLive(this.live);
    return this.live;
  }
}
var g1 = new Game(5, onAttack);
//var g2 = new Game(7);
g1.attack();
g1.attack();

console.log(g1.getMylive());*/
