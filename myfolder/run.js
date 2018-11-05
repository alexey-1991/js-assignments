function titleCaseConvert(title, minorWords) {
    if (!minorWords) minorWords="";

    const lowerTitleArr=title.toLowerCase().split(" ");
    const minorWordsArr=minorWords.split(' ').map(word=>word.toLowerCase());

    const resultTitleArr=lowerTitleArr.map((word,i)=>{
        if (minorWordsArr.includes(word) && i!==0) return word;
        return word[0].toUpperCase()+word.slice(1) ;
    })

    return resultTitleArr.join(" ")

}


const title='THE WIND IN THE WILLOWS';
const minorWords='';

console.log(titleCaseConvert(title))