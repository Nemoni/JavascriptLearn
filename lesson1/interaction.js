import readline from 'readline';
import inquirer from 'inquirer';

// 创建readline接口
function readInput(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

// 定义一个异步函数，读取用户的输入
async function prompt(question, defaultValue) {
  // 如果设置了默认值，将其添加到问题中
  if (defaultValue) {
    question += ` (${defaultValue}) `;
  }
  // 调用readInput函数，等待用户的输入
  const answer = await readInput(question);
  // 如果用户没有输入值，使用默认值
  if (!answer.trim() && defaultValue) {
    return defaultValue;
  }
  return answer;
}

// 定义一个异步函数，询问用户是否为老板
async function confirm(message) {
    const { isSure } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'isSure',
        message
      }
    ]);
    return isSure;
}

export {
    prompt,
    confirm,
}