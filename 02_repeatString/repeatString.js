const repeatString = function(word, times) {
    let result = '';
      if (times < 0) {
          return "ERROR";
      } else if(times === 0) {
          return '';
      } 
          for (let i = 0;i < times;i++) {
              result += word;
          }
          return result;
  };

// Do not edit below this line
module.exports = repeatString;
