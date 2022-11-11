function createCounter() {
  var count = 10;
  return {
    increment: function () {
      count++;
    },

    decrement: function () {
      count--;
    },
    currentCount: function () {
      return count;
    },
  };
}
var myCounter = createCounter();
console.log(myCounter.currentCount()); //10
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.currentCount()); //13
myCounter.decrement();
myCounter.decrement();
console.log(myCounter.currentCount()); //11
