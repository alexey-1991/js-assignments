function calcRPN(expr) {
    if (!expr) return 0; 

    const orerandReg=/\*|\+|-|\//;
    const numberReg=/\d/;
    let buffer=[];
    let exprArr=expr.split(" ");

    
    if (!orerandReg.test(expr)) return exprArr[exprArr.length-1];

    while (exprArr.length!==1){

        for (let i=0;i<exprArr.length;i++){
            const elem=exprArr[i];

            let prevPrevElem;
            let prevElem;
                
            if (i>=2){
                prevElem=exprArr[i-1];
                prevPrevElem=exprArr[i-2];
            }

            if (orerandReg.test(elem) && i>=2) {
                buffer=[prevPrevElem,prevElem];
                const newvalue=countBuffer(buffer,elem);
                exprArr=[].concat(
                    exprArr.slice(0,i-2),
                    [newvalue],
                    exprArr.slice(i+1)
                )
                break;
            } 
            if (i<2 && orerandReg.test(elem)) console
                            .log("syntax error: incorrect input")
        }
    }

    return exprArr[0]
}

function countBuffer(buffer,operand){
    return eval(buffer.join(operand))
}


const expr='';
const expr1='1 2 3';
const expr2='4 2 +';
const expr3='2 5 * 2 + 3 /';
const expr4='5 1 2 + 4 * + 3 -';

console.log(calcRPN(expr))
console.log(calcRPN(expr1))
console.log(calcRPN(expr2))
console.log(calcRPN(expr3))
console.log(calcRPN(expr4))


