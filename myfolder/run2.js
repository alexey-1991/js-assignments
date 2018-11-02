function* expandBraces(str) {

    console.log(str);

    const reg=/{[^{}]*({[^{}]*})?[^{}]*}/g;
    const editable = str.match(reg);
    const editableArr=editable.map(elem=>{
        return elem.slice(1,elem.length-2).split(",");
    })


    

    console.log(editable)
    console.log(editableArr)

    const stringReplaced=str.replace(reg,"###");



    
    

    yield 'asdsad';
    yield 'asdsfdaf';
}
  

const str='~/{Downloads,Pictures}/*.{jpg,gif,png}';
const str2='It{{em,alic}iz,erat}e{d,}, please.';
const str3='thumbnail.{png,jp{e,}g}';


for(let elem of expandBraces(str)){
    console.log(elem)
}