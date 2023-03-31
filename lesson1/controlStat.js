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
    // ??空值合并运算符
    let firstname;
    let lastname;
    console.log(firstname ?? lastname ?? "default"); // default，返回第一个“已定义”的值，“已定义”表示既不是null也不是undefined
    let a;
    let b = 'xxx';
    console.log(a ?? b);  // ‘xxx’，等价于下面这个式子
    console.log((a != null && a != undefined) ? a : b); 
    console.log((firstname || lastname) ?? a); //undefined(a),不能在没有括号的情况下将??同&&和||混用
    /* while */
    console.log("while:");
    let x = 0;
    while(x < 4){
        if (x == 3){
            break; // break和continue不允许出现在问号表达中的？右边
        }
        console.log("x is " + x);
        x++;
    }
    let y = 0;
    do{
        y++;
    }while(y < 3);
    /* for */
    console.log("for:");
    outer: for(let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(j == 2){
                continue outer; // 从outer标签处那个循环的下一个循环继续
            }
            if(i == 3){
                break outer; // 从outer标签处跳出
            }
            console.log("i is " + i);
            console.log("j is " + j);  
        }
    }

}

export{
    control,
}