const str='https://en.wikipedia.org/wiki/Percent-encoding#Types_of_URI_characters';






let newStr='';

for (let i=0;i<str.length;i++){
    const prevelem=str[i-1]||'1';
    const elem=str[i];
    const nextelem=str[i+1]||'1';

    const code1=(elem.codePointAt(0)>=100);
    const code2=(prevelem.codePointAt(0)>=100);
    const code3=(nextelem.codePointAt(0)>=100);



    if (code1 && code2 && code3){

        newStr+=`${elem.codePointAt(0)}`
        continue;
    }
    
    newStr+=elem;
}

console.log(newStr);
//String.fromCodePoint
//str.codePointAt

let encodedStr='';

for (let i=0;i<newStr.length;i++){
    const testString=newStr.slice(i,i+5);
    const reg=/\d{5}/
    if (reg.test(testString)){
        encodedStr+=String.fromCodePoint(+testString);
        i=i+4
        continue;
    }
    encodedStr+=newStr[i];
}

console.log(str)
console.log(encodedStr)

// for (let i=0;i<encodedStr.length;i++){
//     const testString=newStr.slice(i,i+3);
//     const reg=/\d{3}/
//     if (reg.test(testString)){
//         encodedStr+=String.fromCodePoint(+testString);
//         i=i+2
//         continue;
//     }
//     encodedStr+=encodedStr[i];
// }








