var promissObj = new Promise((right, wrong) => {
  //console.log(right, wrong);
  right("I got todays temp");
  wrong("i love react");
});

promissObj.then((wrong) => {
  console.log(wrong);
});

//promissObj(right);

/*const promissFunction = (resolve, reject) => {
  resolve("hi i am resolve data..");
  reject("hi i am reject data..");
};

const resolve = (res) => {
  console.log(res);
};

const reject = (res) => {
  console.log(res);
};

//promissFunction(resolve, reject);

class Game {
  constructor(method) {
    method(this.resolve, this.reject);
  }

  resolve(res) {
    console.log(res);
  }
  reject(res) {
    console.log(res);
  }
}
var obj = new Game(promissFunction);*/
