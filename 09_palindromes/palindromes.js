const palindromes = function (str) {
    let acceptableChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let isPalindrome = true;

    let cleanedString = str.toLowerCase()
    .split("")
    .filter(c => acceptableChars.includes(c))
    .join("");

    let j = cleanedString.length-1;
    for (let i = 0; i < j; i++) {
        if (cleanedString[i] !== cleanedString[j]) {
            isPalindrome = false;
        }
        j--;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
