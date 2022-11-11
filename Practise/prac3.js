var myPromise = new Promise((resolve, reject) => {
  const score = 5;
  const minScore = 3;
  // here we comparing two numbers
  //this is code that can take some time - producing
  if (score >= minScore) {
    // if Operation successful
    resolve();
  }
  //this is code that must wait for the result - consuming
  else {
    // Error occurred
    reject();
  }
});
// Using a Promise object

myPromise.then(
  () => {
    console.log("You score is good : sucess");
  },
  () => {
    console.log("You are not allowed : error");
  }
);

const getData = () => {};
