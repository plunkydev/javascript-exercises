const add = function() {
	let arr = [];
  for(let ele of arguments) {
    arr.push(Number(ele));
  }
  return arr.reduce((acc, el) => acc + el);
};

const subtract = function() {
	let arr = [];
  for(let ele of arguments) {
    arr.push(Number(ele));
  }
  return arr.reduce((acc, el) => acc - el);
};

const sum = function() {
	let arr = [];
  for(let ele of arguments[0]) {
    arr.push(Number(ele));
  }
  if(arr[0] === undefined) {
    return 0;
  }
  return arr.reduce((acc, el) => acc + el);
};

const multiply = function() {
  let arr = [];
  for(let ele of arguments[0]) {
    arr.push(Number(ele));
  }
  if(arr[0] === undefined) {
    return 0;
  }
  return arr.reduce((acc, el) => acc * el);
};

const power = function() {
	let arr = [];
  for(let ele of arguments) {
    arr.push(Number(ele));
  }
  if(arr[0] === undefined) {
    return 0;
  }
  let result = [];
  for(let i = 0;i < arr[1];i++){
    result.push(arr[0])
  }
  return result.reduce((acc, el) => acc * el);
};

const factorial = function() {
	let longitud;
  for(let ele of arguments) {
    longitud = Number(ele);
  }
  let result = [];
  for(let i = 1;i <= longitud;i++){
    result.push(i)
  }
  if(longitud === 0) {
    return longitud = 1;
  }
  return result.reduce((acc, el) => acc * el);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
