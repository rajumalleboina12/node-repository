class Correct {
  constructor(nameMethod) {
    nameMethod(this.right, this.wrong);
  }

  right(values) {
    var score = 18;
    var minScore = 20;
    if (score >= minScore) {
      console.log(values + "," + "You are allowed");
    }
  }
  wrong(values) {
    console.log(values + "," + "You are not allowed");
  }

  /*then(values) {
    values(this.wrong);
  }*/
}

var obj = new Correct((right, wrong) => {
  right("sucess");
  wrong("error");
});
