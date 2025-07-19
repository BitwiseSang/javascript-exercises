const sumAll = function (...nums) {
  let sum = 0;
  // Type checks
  filteredNums = nums.filter(
    (num) => isNum(num) && isPositiveNum(num) && !isFloat(num)
  );

  if (filteredNums.length !== 2) {
    return 'ERROR';
  }

  // Sort filtered array
  filteredNums.sort((a, b) => a - b);
  const [start, end] = filteredNums;

  // Loop through and calculate sum
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

function isNum(n) {
  return typeof n === 'number' && !isNaN(n) && Number(n) === n;
}

function isPositiveNum(n) {
  return n > 0;
}

function isFloat(n) {
  return typeof n === 'number' && Number(n) === n && n % 1 !== 0;
}

// Do not edit below this line
module.exports = sumAll;
