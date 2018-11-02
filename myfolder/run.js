function canDominoesMakeRow(dominoes) {
    
    const startIndex=0;

    let sideLeft=0;
    let indexLeft=startIndex;
    let dominoLeft=dominoes[indexLeft];

    let sideRight=1;
    let indexRight=startIndex;
    let dominoRight=dominoes[indexRight];

    
    //movement to the right
    for (let i=0;i<dominoes.length;i++){
        const elem=dominoes[i];
        if (!elem[0] && !elem[1]) continue;
        if ( i===indexRight ) continue;
    

        if (elem[0]===dominoRight[sideRight] ){
            elem[0]=null;
            dominoRight[sideRight]=null;

            indexRight=i;
            dominoRight=elem;
            sideRight=1;
            i=0;
            continue;
        }

        if (elem[1]===dominoRight[sideRight] ){
            elem[1]=null;
            dominoRight[sideRight]=null;

            indexRight=i;
            dominoRight=elem;
            sideRight=0;
            i=0;
            continue;
        }
    } 

    //movement to the left
    for (let i=0;i<dominoes.length;i++){
        const elem=dominoes[i];
        if (!elem[0] && !elem[1]) continue;
        if ( i===indexLeft ) continue;
    

        if (elem[0]===dominoLeft[sideLeft] ){
            elem[0]=null;
            dominoLeft[sideLeft]=null;

            indexLeft=i;
            dominoRight=elem;
            sideLeft=1;
            i=0;
            continue;
        }

        if (elem[1]===dominoLeft[sideLeft] ){
            elem[1]=null;
            dominoLeft[sideLeft]=null;

            indexLeft=i;
            dominoLeft=elem;
            sideLeft=0;
            i=0;
            continue;
        }
    } 
    
    return !!!dominoes.find(elem=>elem[0] && elem[1])
}

const dom0=[null,  null];
const dom1=[[0,1],  [1,1]];
const dom2=[[1,1], [2,2], [1,5], [5,6], [6,3]];
const dom3=[[1,3], [2,3], [1,4], [2,4], [1,5], [2,5]];
const dom4=[[0,0], [0,1], [1,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [3,3]];

// console.log(canDominoesMakeRow(dom0))
// console.log(canDominoesMakeRow(dom1))
// console.log(canDominoesMakeRow(dom2)) 
// console.log(canDominoesMakeRow(dom3))
console.log(canDominoesMakeRow(dom4)) 