function testParam(var1, var2) {
    console.log("var1:" + var1);
    console.log("var2:" + var2);
}

function defaultParam(var1, var2 = "default value") {
    console.log("var1:" + var1);
    console.log("var2:" + var2);
}

function testReturn() {
    return;
}

function exeFunc(para){
    para();
}

function outer() {
    testParam("string1"); // var1:string1,var2:undefined，未传入的参数是undefined的
    testParam("string1", "string2");
    defaultParam("string1"); // var1:string1，var2:default value， 定义了默认值，因此未传入的参数是默认值
    let ret = testReturn();
    console.log("ret:" + ret); // undefined, “return;”或不写return返回的值都是undefined

    console.log(testParam); // 函数名testParam不仅是一个函数，它本身也是一个变量

    // 函数表达式，创建函数的另一种方式
    let sayHi = function(){  // 代码执行到这儿才会创建函数
        console.log("hello");
    }; // 注意它是一个表达式，末尾需要分号。当然不加也可以运行，javascript会自动加上。
    sayHi();
    let fun1 = sayHi; // 可以对函数变量进行赋值
    fun1();

    funStat(); // 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。

    exeFunc(function(){console.log("callback function")}); // 匿名函数，回调函数

    /* 箭头函数 */
    let sum = (a, b)=>a+b; // 待价于下面的函数表达式
    console.log(sum(3,4));
    let sum1 = function(a,b){
        return a + b;
    }
    console.log(sum1(4,5));

    let sum2 = (a,b)=>{ // 带花括号的箭头函数需要手写return
        let c = a + b;
        return c;
    }
    console.log(sum2(5,6));
}

function funStat(){
    console.log("funSatat")
}

export {
    outer,
}