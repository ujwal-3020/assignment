// Implement a function to count the number of vowels in a given string.

function countVowels(str) {
    // BOTH UPPERCASE AND LOWERCASE VOWELS
    const vowelRegex = /[aeiou]/gi;

    const matches = str.match(vowelRegex);

    return matches ? matches.length : 0;
}

console.log(countVowels("Hello World"));
console.log(countVowels("JavaScript")); 
console.log(countVowels("Rhythm")); 
console.log(countVowels("A quick brown fox jumps over the lazy dog")); 