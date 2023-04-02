function classMain() {
  // 对象
  let empty1 = new Object(); // 创建对象方法一
  let empty2 = {}; // 创建对象方法二
  console.log(empty1);
  console.log(empty2);
  let user = {
    name: "Tom",
    age: 3,
  };
  // 查询
  console.log(user.name);
  console.log(user.age);
  // 新增
  user.isHuman = false;
  console.log(user);
  // 删除
  delete user.isHuman;
  console.log(user);
  // 方括号
  user["good hoby"] = "reading"; // 访问属性方法一
  console.log(user["good hoby"]);
  let key1 = "bad hoby";
  user[key1] = "smoking"; // 访问属性方法二
  console.log(user[key1]);
  // 计算属性
  let x = "home";
  let student = {
    [x]: "Moon", // 计算属性
  };
  console.log(student);
  // 属性简写
  let name = "Jerry";
  let human = {
    name, // name:name,的简写形式
    age: 3,
  };
  console.log(human.name);
  // 属性存在性检测
  console.log(human.xx == undefined); // true，属性xx不存在
  console.log("xx" in human); // false, 用in检测属性xx是否存在
  // for in 循环
  console.log("for loop:");
  for (let key in human) {
    console.log(key + ":" + human[key]);
  }
}

export { classMain };
