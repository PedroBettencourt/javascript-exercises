filteredLetters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const palindromes = function (word) {
    word = word.toLowerCase().split("").filter((a) => filteredLetters.includes(a)).join("")
    inverseWord = word.split("").reverse().join("");
    return inverseWord === word;
};

// Do not edit below this line
module.exports = palindromes;
