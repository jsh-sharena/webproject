(function() {
    console.log(moduleB.flag);
})()


moduleA.exports = {
    flag: true,
    test(a, b) {
        return a + b
    },
    demo(a, b) {
        return a * b
    }
}