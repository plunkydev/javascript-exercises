const removeFromArray = function(arr, ...elems) {
  let result = [];
  arr.forEach((item)=>{
    if(!elems.includes(item)){
      result.push(item);
    }
  })
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
