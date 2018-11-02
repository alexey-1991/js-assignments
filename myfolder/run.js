function* wrapText(text, columns) {

    const arrWords=text.split(' ');
 
    let output=[];
    let indexWord=0;

    for (let i=0; i<arrWords.length;i++){
        const word =arrWords[i];

        const newOutput=output.concat([word])
        const newOutputString=newOutput.join(' ').length;

        
        if (newOutputString>columns) {
            yield output.join(' ');
            output=[];
            i--;
            
        } else {
            output=newOutput;
            if (i===arrWords.length-1) yield output.join(' ');
        }
    }

}



const str='The String global object is a constructor for strings, or a sequence of characters.'
const col=26;

for (let text of wrapText(str,col)){
    console.log(text);
}