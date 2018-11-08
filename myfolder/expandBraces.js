function* expandBraces(str) {

    //searching braces type of
    // '[ '{Downloads,Pictures}', '{jpg,gif,png}' ]'
    const reg = /{[^{}]*({[^{}]*})?[^{}]*}/g;
    const editable = str.match(reg);

    //preparing workStr type of
    // '~/br0/*.br1'
    let workStr = str;
    editable.forEach((elem, i) => {
        const reg1 = new RegExp(elem);
        const name = `br${i}`;
        workStr = workStr.replace(reg1, name);
    });
    console.log('workStr:', workStr);

    //preparing Editable Array type of
    //[ [ 'Downloads', 'Picture' ], [ 'jpg', 'gif', 'pn' ] ]
    const editableArr = editable.map(elem => {
        return elem.slice(1, elem.length - 1).split(',');
    });

    //combinations
    let result = [];
    let combinations = [];
    for (let m = 0; m < editableArr.length; m++) {
        const name = `br${m}`;
        const regName = new RegExp(name);
        for (let n = 0; n < editableArr[m].length; n++) {

            if (m === 0) {
                const combination = workStr.replace(regName, editableArr[m][n]);
                combinations.push(combination);
            } else {

                const newCombinations = combinations.map(elem => {
                    return elem.replace(regName, editableArr[m][n]);
                });
                result = result.concat(newCombinations)
            }
        }
    }

    console.log('combinations:', combinations)
    console.log('result:', result)



    const stringReplaced = str.replace(reg, '###');






    yield 'asdsad';
    yield 'asdsfdaf';
}


const str = '~/{Downloads,Pictures}/*.{jpg,gif,png}';
const str2 = 'It{{em,alic}iz,erat}e{d,}, please.';
const str3 = 'thumbnail.{png,jp{e,}g}';
const str4 = '~/{Downloads,Pictures}/*.bbf';
const str5 = '~/5641';


for (let elem of expandBraces(str5)) {
    console.log(elem)
}
