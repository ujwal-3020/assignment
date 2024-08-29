function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function throttle(fn, limit) {
    let lastCall = 0;

    return function(...args) {
        const now = Date.now();
        if (now - lastCall < limit) {
            return;
        }
        lastCall = now;
        fn.apply(this, args);
    };
}

const handleResize = debounce(() => {
    console.log('Window resized!');
}, 500);

const handleScroll = throttle(() => {
    console.log('Scrolling!');
}, 1000);

window.addEventListener('resize', handleResize);
window.addEventListener('scroll', handleScroll);