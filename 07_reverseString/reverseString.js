const reverseString = function (stringToReverse) {
  let stringArray = stringToReverse.split('');
  let stringArrayReverse = stringArray.reverse();
  return stringArrayReverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
