// 控制语句
import { prompt } from "./interaction.js"

function control() {
    // if else 语句
    if(0)
        prompt('What’s the “official” name of JavaScript?', "don't know").then((answer) => {
            if(answer.trim() == "ECMAScript"){
                console.log("Right!");
            }else{
                console.log('You don’t know? “ECMAScript”!');
            }
        });
    // ? 表达式
    let result = (3 > 2)?"big":"small";
    console.log(result);
    // 逻辑或||，返回第一个直值
    let var1 = '';
    let var2 = 'nemo';
    let var3 = '';
    console.log(var1 || var2 || var3); // nemo, 或运算时，将类型先转换成布尔进行判断，当为真时返回对应的值，都为假就返回最后一个值
    // 逻辑与&&, 返回第一个假值，&&优先级比||高
    console.log(var1 && var2 && var3); // '', 返回第一个假值，都为真则返回最后一个值
    // 逻辑非 !,先转成boolean，再取反值,结果是Boolean类型
    console.log(!"3"); // false，先转成boolean，再取反值
    console.log(!!"3"); // true，转成boolean类型，作用与Boolean()相同
}

export{
    control,
}