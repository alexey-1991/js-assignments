function distinctLettersString(value1, value2) {
    
    const initialArr=[value1,value2];
    const letters={};

    initialArr.forEach(str=>{
        str.split('').forEach(letter=>{
            letters[letter]=1;
        })
    })

    const keys=Object.keys(letters);
    const sortArr=keys.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))

    return sortArr.join("");
}

const s1='abcdefghijklmnop';
const s2='lmnopqrstuvwxyz';

const s3='azy';
const s4='bk';

console.log(distinctLettersString(s1,s2))