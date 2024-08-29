
//  Create a function to check anagrams.

function areAnagrams(str1, str2, options = { withNonAlphabetic: true, isCaseSensitive: false}) {
    const { withNonAlphabetic = true, isCaseSensitive = false } = options;

    if (!withNonAlphabetic) {
        const formatString = (str) => str.replace(/[^\w]/g, '');
        str1 = formatString(str1);
        str2 = formatString(str2);
    }
    
    if (!isCaseSensitive) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("Listen!", "Silent...", {
    isCaseSensitive: true
}));
console.log(areAnagrams("Listen!", "Silent..."));
console.log(areAnagrams("Listen!", "Silent...", {
    withNonAlphabetic: false,
    isCaseSensitive: true
}));
console.log(areAnagrams("Listen!", "Silent...", {
    withNonAlphabetic: false
}));
// console.log(areAnagrams("Listen!", "Silent!")); 
// console.log(areAnagrams("test", "best"));
// console.log(areAnagrams("Listen!", "Silent...", { withNonAlphabetic: false })); 
// console.log(areAnagrams("Listen!", "Silent!", { withNonAlphabetic: false }));