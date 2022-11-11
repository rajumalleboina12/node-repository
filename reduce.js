const numbers = [15.5, 2.3, 1.1, 4.7];
var abc = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}

console.log(abc);
