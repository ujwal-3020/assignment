function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        const key = JSON.stringify(args);

        // FIRST CHECK FOR THE CACHE
        if (cache.has(key)) {
            return cache.get(key);
        }

        // GET THE RESULT AND CACHE IT
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

function slowFunction(num) {
    console.log('Computing...');
    return num * num;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing... \n 25
console.log(memoizedFunction(5)); // 25 (from cache)
console.log(memoizedFunction(10)); // Computing... \n 100
console.log(memoizedFunction(10)); // 100 (from cache)