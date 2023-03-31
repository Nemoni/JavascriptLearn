import { prompt, confirm } from "./lesson1/interaction.js";

// 调用prompt函数，等待用户输入，异步
prompt('How old are you?', 100).then((age) => {
    console.log(`Your age is ${age} years old.`);
});

// 等待用户输入，同步
let money = await prompt('How much money do you have?', 2000);
console.log(`Your have ${money} dollars.`);

// 调用confirm函数，等待用户输入
confirm('Are you the boss?').then((isBoss) => {
  console.log(`You are ${isBoss ? '' : 'not '}the boss.`);
});

// 等待用户输入，同步
let isBoy = await confirm('Are you a boy?');
console.log(`You are ${isBoy ? '' : 'not '}a boy.`);