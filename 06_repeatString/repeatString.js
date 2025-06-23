const repeatString = function (repeatText, repeats) {
  let result = '';
  if (repeats < 0) {
    return 'ERROR';
  } else {
    for (let i = 0; i < repeats; i++) {
      result = result.concat(repeatText);
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
