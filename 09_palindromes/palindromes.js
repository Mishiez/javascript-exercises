const palindromes = function (str) {
    let punctuationless=str.match(/\w/g).join("");

    let lowerCasePunctuationless=punctuationless.toLowerCase();
    let reversePunctuationless=lowerCasePunctuationless.split('').reverse().join('');
    
    return reversePunctuationless===lowerCasePunctuationless;
}

// Do not edit below this line
module.exports = palindromes;
