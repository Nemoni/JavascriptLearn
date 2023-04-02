import _ from "lodash";

function objectCopy() {
  // 对象是以“引用”的方式存储、复制
  let obj1 = { name: "Tom" };
  let obj2 = obj1;
  console.log(obj1 === obj2); // true
  obj2.name = "Jerry";
  console.log(obj1.name); // Jerry
  let a = {};
  let b = {};
  console.log(a == b); // false， a和b是两个不同的对象
  console.log(a === b); // false
  // 浅拷贝
  let name = { name: "tom" };
  let age = { age: 3 };
  let tom = Object.assign({}, name, age); // 将对象name、age拷贝到空对象{}，Object.assign会将目标对象return。Object.assign是浅拷贝
  console.log(tom);
  // 深拷贝
  let user = {
    name: "john",
    sizes: {
      width: 20,
      height: 30,
    },
  };
  let user2 = deepClone({}, user); // 自实现深拷贝
  user.sizes.height = 33; // 修改user中深层对象的属性值，user2中不变
  console.log("user:");
  console.log(user);
  console.log(user.sizes);
  console.log("user2:");
  console.log(user2);
  console.log(user2.sizes);
  // 使用lodash深拷贝
  console.log("lodash:");
  let john = _.cloneDeep(user);
  console.log(john);
  console.log(john.sizes);
}

function deepClone(dest, src) {
  for (let key in src) {
    if (src[key] != null && typeof src[key] == "object") {
      dest[key] = deepClone({}, src[key]);
    } else {
      dest[key] = src[key];
    }
  }
  return dest;
}

export { objectCopy };
