;
(function() {
    if (moduleA.flag) {
        //1.想使用flag
        console.log("小明是天才，哈哈")
    }

    //2.使用sum函数
    console.log(moduleA.sum(40, 50))
})()

var { flag, sum } = require('./aaa.js');
// 等同于
var aaa = require('./aaa.js');
var flag = aaa.flag;
var sum = aaa.sum;