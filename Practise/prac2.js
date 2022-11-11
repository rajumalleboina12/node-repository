var demo = new Promise((resolve, reject) => {
  resolve(1), reject(3);
});
let call = demo.then(
  (value) => {
    console.log(value);
    return value++;
  },
  (message) => {
    console.log(message);
  }
);

console.log(call);
