// Create a function to check if a string is a palindrome.

function isPalindrome(str, options = { withNonAlphabetic: true, isCaseSensitive: false}) {

    const { withNonAlphabetic = true, isCaseSensitive = false } = options;

    if (!withNonAlphabetic) str = str.replace(/[^\w]/g, '');
    
    if (!isCaseSensitive) str = str.toLowerCase();

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

console.log(isPalindrome("Hello,oLleh", {
    isCaseSensitive: true
}));
console.log(isPalindrome("Hello,oLleh"));
console.log(isPalindrome("Hello,oLleh", {
    withNonAlphabetic: false,
    isCaseSensitive: true
}));
console.log(isPalindrome("Hello,oLleh", {
    withNonAlphabetic: false
}));