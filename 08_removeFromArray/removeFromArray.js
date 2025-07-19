const removeFromArray = function (arr, ...args) {
  // [1,2,3,4]
  return arr.filter((value) => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
