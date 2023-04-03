function arrayType() {
  let arr1 = new Array("book", "fruit"); // 一般不用这个，用下面的方括号创建array
  let arr2 = ["table", "pen"];
  console.log(arr1);
  console.log(arr2);
  console.log(arr2[0]);
  console.log(arr2[arr2.length - 1]);
  console.log(arr2.at(-1)); // 获取最后一个元素
  // push,pop,unshift,shift
  arr2.push("cup");
  console.log(arr2);
  arr2.pop();
  console.log(arr2);
  arr2.unshift("mice");
  console.log(arr2);
  arr2.shift();
  console.log(arr2);
  // 循环
  console.log("for:");
  for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
  }
  console.log("for of:");
  for (let value of arr2) {
    // for of，访问value，不会访问key
    console.log(value);
  }
}

export { arrayType };
