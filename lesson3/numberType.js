function numberType(){
    // 数字
    console.log("----number----"); 
    let n = 100_000_000; // 语法糖，下划线会被忽略
    console.log(n); //100000000
    let big = 2.3e4;
    console.log(big); //23000
    let small = 1.2e-3;
    console.log(small); //0.0012
    // 进制
    console.log("----hex----"); 
    console.log(0x11); // 17, 十六进制
    console.log(0b10101); // 21, 二进制
    console.log(0o11); // 9，八进制
    // num.toString(base)
    console.log("----toString----"); 
    let x = 123;
    console.log(x.toString(16)); // 7b,转成16进制的字符串，最大可转成36进制
    console.log(8.1.toString(2));
    console.log(10..toString(8)); // 第一个点是小数，第二个点是访问toSting()函数
}

export {numberType};