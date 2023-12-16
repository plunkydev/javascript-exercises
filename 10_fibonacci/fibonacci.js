const fibonacci = function (limit) {
let fibo = [1, 1];
let result = 0;
if (limit < 1) {
    return "OOPS";
}
for (let i = 2; i < limit; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2]);
}
for (let i = 0; i < fibo.length; i++) {
    result = fibo[i];
}
return result;
};

// Do not edit below this line
module.exports = fibonacci;
