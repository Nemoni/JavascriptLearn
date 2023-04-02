function objectThis() {
  // 对象方法
  let user = {
    name: "Tom",
    age: 3,
    sayMorning: () => {
      console.log("morning");
    },
    sayAfternoon, // 简化写法，key和值都是sayAfternoon
    sayOtherAfer: sayAfternoon,
    syaGoodNight() {
      console.log("good night");
    },
  };
  user.sayHi = () => console.log("hello"); // 箭头表达式,新增函数属性
  user.sayGoodbye = function () {
    // 函数声明
    console.log("goodbye");
  };
  user.sayHi();
  user.sayMorning();
  user.sayAfternoon();
  user.sayGoodbye();
  user.sayOtherAfer();
  user.syaGoodNight();
  // this
  let student = {
    name: "cris",
    sayHi() {
      console.log("Hi " + this.name); // this指向当前对象
      let arrow = () => {
        console.log("Arrow " + this.name); // 箭头函数没有自己的this，this的值取决于外部
      };
      arrow();
    },
    sayHello: () => {
      //console.log("Hello " + this.name); // 报错，箭头函数没有自己的this
    },
  };
  student.sayHi();
  student.sayHello();

  student.func = sayBad;
  student.func();

  function sayBad() {
    console.log("Bad " + this.name); // this在运行时才会进行计算，所以单独的函数也可以有this
  }
}

function sayAfternoon() {
  console.log("afternoon");
}

export { objectThis };
