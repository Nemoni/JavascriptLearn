// 类型转换
function dataConvert() {
  let name = "nemo";
  let age = 3;
  let str = "123r";
  let x;

  // 字符串
  console.log("String:");
  console.log(age); // 3, 自动转换成string
  console.log(String(age)); // 3, 显示转换成string
  // 数字型
  console.log("Nubmer:");
  console.log(Number(name)); // NaN
  console.log(Number(x)); // NaN, 声明但未定义
  console.log(Number(str)); // NaN
  console.log(Number(true)); // 1
  console.log(Number(null)); // 0
  console.log(Number(undefined)); // NaN
  let und = undefined;
  console.log(Number(und)); // NaN
  //console.log(Number(undefvar)); // ReferenceError，报错
  // 布尔型
  console.log("Boolean:");
  console.log(Boolean(null)); // false
  console.log(Boolean("")); // false
  console.log(Boolean(0)); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean(" ")); // true
  console.log(Boolean("0")); // true
}

export { dataConvert };
