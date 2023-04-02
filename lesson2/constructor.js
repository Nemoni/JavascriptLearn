function constructor() {
  function Person(name, age, type) {
    // 构造函数，名称一般约定以大写字母开头
    this.name = name;
    this.age = age;
    this.type = type;
  }
  let tom = new Person("tom", 12, "student");
  console.log(tom);
  let jerry = new (function () {
    // 没有名字的构造函数
    this.name = "default";
  })();
  jerry.name = "jerry";
  console.log(jerry);
  // new.target
  function User() {
    console.log(new.target);
  }
  User(); // new.target是undefined
  new User(); // new.target是User函数
  // return
  function Pig() {
    this.name = "dai";
    return { name: "xiaodai" }; // 若返回对象则生效，若返回其它值则会被忽略，相当于返回this
  }
  console.log(new Pig()); // 没有参数的时候括号可以省略
  // 构造器中的方法
  function Cat(name) {
    this.name = name;
    this.sayHi = () => {
      console.log("MiaoMaio");
    };
  }
  let tommy = new Cat("tommy");
  tommy.sayHi();
  // 可选链?.
  console.log("?.:");
  let box = {
    name: "tips",
  };
  let cup = {
    drink() {
      console.log("drink");
      return 1;
    },
  };
  console.log(box.height?.name)
  console.log(box?.["name"]);
  console.log(cup?.["name"]);
  console.log(box.drink?.());
  console.log(cup.drink?.());
}

export { constructor };
