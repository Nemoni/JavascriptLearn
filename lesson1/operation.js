// 数学运算
function operations() {
  // 数学运算
  console.log("operations:");
  console.log(1 + 1);
  console.log(3 - 1);
  console.log(2 * 2);
  console.log(5 / 2);
  console.log(7 % 3); // 取余
  console.log(2 ** (1 / 2)); // 幂运算
  // 字符串连接+
  console.log("connect +:");
  console.log(1 + 1 + "2"); // "22", 从左到右计算，遇到字符串才连接
  console.log("3" + 1 + 1); // "311"
  console.log("6" - 2); // 4
  console.log("4" / "2"); // 2，只有+才有连接作用
  console.log(+"43" + +"3"); // 46，'+'放在非数字前面有把非数字转换成数字的作用，类似于Number()
  // ++ --
  //console.log(5++); //SyntaxError，自增、自减只能应用于变量，不能用于数字
  let val1 = 3;
  let val2 = 3;
  console.log(val1++); // 3
  console.log(++val2); // 4
}

export { operations };
