const palindromes = function (str) {
    let a = str.toLowerCase().match(/[A-Za-z0-9]/g);
    let b = str.toLowerCase().match(/[A-Za-z0-9]/g).reverse();
    return a.join('') == b.join('')
};

// Do not edit below this line
module.exports = palindromes;
