function symbolType() {
  let id = Symbol("id descript");
  console.log(typeof id);
  console.log(id.toString());
  console.log(id.description);
  let user = {
    name: "tommy",
  };
  console.log(user);
  user.id = id; // 相当于user['id'] = id, 注意它的键是字符串'id'不是symbol
  console.log(user);
  user[id] = "symbol as key";
  console.log(user[id]);
  console.log(user);
  // for in 会跳过以symbol为key的属性
  for (let key in user) {
    if (typeof user[key] == "symbol") {
      console.log(key + ":" + user[key].toString());
    } else {
      console.log(key + ":" + user[key]);
    }
  }
  // Object.assign会复制symbol属性
  let user1 = Object.assign({}, user);
  console.log(user1);
  // 全局symbol，Symbol.for(key)
  let id1 = Symbol.for("nemo"); // 若symbol不存在则创建
  let id2 = Symbol.for("nemo");
  console.log(id1 === id2);
  // 通过symbol查找key, Symbol.keyFor(symbol)
  let sym1 = Symbol.for("sym1 key"); // 创建全局symbol
  let localSym = Symbol("local symbol"); // 创建本地symbol
  console.log(Symbol.keyFor(sym1));
  console.log(Symbol.keyFor(localSym)); // 全局找不到本地symbol
  console.log(typeof Symbol.toPrimitive); // 内置symbol
  // Symbol.toPrimitive
  console.log("Symbol.toPrimitive:");
  let teacher = {
    name: "dan",
    age: 30,
    [Symbol.toPrimitive](hint) {
      console.log(`hint:${hint}`);
      if (hint == "string") {
        return this.name;
      } else if (hint == "default") {
        return this.age;
      } else {
        return this.age;
      }
    },
  };
  console.log(String(teacher)); // hint string
  console.log(+teacher); // hint number
  console.log(teacher + 20); // hint default
  console.log(teacher + "x"); // hint default
  console.log(teacher.toString()); // [object Object]
  // toString(),valueOf()
  console.log("toString(),valueOf():");
  let cup = {
    color: "green",
    price: 200,
    toString() {
      console.log("call toString()");
      return this.color;
    },
    valueOf() {
      console.log("call valueOf()");
      return this.price;
    },
  };
  console.log(String(cup)); // toString()
  console.log(+cup); // valueOf()
  console.log(cup + 20); // valueOf()
  console.log(cup + "x"); // valueOf()
  console.log(cup.toString()); // green
}

export { symbolType };
