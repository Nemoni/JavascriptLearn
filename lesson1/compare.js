// 比较运算
function compare(){
    let var1;
    console.log(var1 === undefined); // true
    console.log(typeof undefvar === undefined); // false, typeof undefvar的结果是字符串‘undefined’，与undefined类型不相等
    let str1 = 'a';
    let str2 = 'A';
    console.log(str1 > str2); // true，小写a大于大写A
    // 不同类型间比较 
    console.log("different type compare:");
    console.log('3' > 2); // true, 不同类型的变量比较时会转换成数字再比较
    // 严格相等
    console.log('1' == 1); // true，转换成数字再比较
    console.log('1' === 1); // false，不同类型间比较时会转换成数字比较，===比较时不会进行任何形式的转换
    // 特例，在非严格相等 == 下，null 和 undefined 相等且各自不等于任何其他的值。
    console.log(null == undefined); // true, null和undefined中“==”的判断逻辑与其它“>、<、>=、<=”是分开的，不做任何类型转换，强行规定null == undefined
    console.log(null === undefined); // false
    console.log(null == 0); // false，null中“==”的判断逻辑是独立的，比较时null不做任何形式的类型转换
    console.log(null >= 0); // true, “>=”比较时，null会被转换成0再比较
    console.log(undefined == 0); // false
}

export{
    compare,
}