class Game {
  constructor(method) {
    method(this.resolve, this.reject);
  }

  resolve(data) {
    console.log(data);
  }

  reject(data) {
    console.log(data);
  }

  //then(resMethod) {
  //resMethod(this.resolve);
  //}
}

var obj = new Game((resolve, reject) => {
  resolve("Hi iam resolve...");
  reject("hey i am wrong");
});

obj.then((resolve) => {
  console.log(resolve);
});
