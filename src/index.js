module.exports = function reverse(n) {
    let a = Math.abs(n)
        .toString(10)
        .split("")
        .reverse()
        .join("");
    return +a;
};
