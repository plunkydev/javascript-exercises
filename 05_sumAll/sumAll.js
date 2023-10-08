const sumAll = function(start, end) {
    let arr = [];
    let result = 0;
    if(start > end) {
      for(let i = end;i <= start;i += 1){
      arr.push(i);
    } 
    } else if(start < 1) {
      return 'ERROR';
    } else if(typeof end !== 'number') {
      return 'ERROR';
    } else {
      for(let i = start;i <= end;i += 1){
        arr.push(i);
    }
    }
    result = arr.reduce((e,i) => e + i);
    return result;
  };
// Do not edit below this line
module.exports = sumAll;
