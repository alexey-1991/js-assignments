function lowerLetters(value) {
    
    const lettersObj={};
    const reg=/[a-z]*/g
    const lettersArr= value.match(reg).join("").split("");

    lettersArr.forEach(elem => {
        lettersObj[elem]=lettersObj[elem]+1||1;
    });

    return lettersObj;

}
const str='Who you are, Buddy?';
console.log(lowerLetters(str))