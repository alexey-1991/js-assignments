function* expandBraces(str) {

    const reg = /{[^{}]*({[^{}]*})?[^{}]*}/g;
    if(!reg.test(str)) {
        yield str;
        return;
    } 

    const obj=createGroup2(str);
    const template = obj.str;
    const groupArr=obj.group;
    let resultArr=[template];

    const regTemplate=/[#]br\d[#]/g
    let cond=resultArr.find(elem=>regTemplate.test(elem));

    
    while (cond){
        groupArr.forEach((group,i)=>{

            const name=`#br${i}#`;
            resultArr=applyGroup2(name,group,resultArr);
            
        })  
        cond=resultArr.find(elem=>regTemplate.test(elem));
    }
    resultArr=removeRepeats(resultArr);

    for (const comb of resultArr){
        yield comb;
    }

}


function createGroup2(str){
    //@param {string} input string
    //@return {object} //{group:array,str:string}
    //group: array for example [ [ 'Downloads', 'Picture' ], [ 'jpg', 'gif', 'png' ] ]
    //str: template string for example 'Itbr2ebr1, please.'
    const reg = /{[^{}]*}/g;
    const group=[];
    let index=0;
    
    while (reg.test(str)){
        const editable = str.match(reg);
        editable.forEach(elem=>{
            const name=`#br${group.length}#`;
            str=str.replace(elem,name);
            group.push(elem.slice(1,-1).split(','))
        })
    }

    return {group:group,str:str};
}
function applyGroup2(str,arr,resultArray){

    //@param {str} name of string in template string, example: 'br1','br0' ... 
    //@param {array} array of possible strings
    //@param {array} result array of string
 
    //@return {array} 

    const newResultArray=[];

    for (const item of resultArray){
        for (const elem of arr){
            newResultArray.push(item.replace(str,elem)); 
        }
    }

    return (newResultArray.length)? newResultArray : resultArray;
    
}
function removeRepeats(array){
    const obj={};
    array.forEach(elem=>obj[elem]=1);
    return Object.keys(obj);
}




const str = '~/{Downloads,Pictures}/*.{jpg,gif,png}';
const str2 = 'It{{em,alic}iz,erat}e{d,}, please.';
const str3 = 'thumbnail.{png,jp{e,}g}';
const str4 = '~/{Downloads,Pictures}/*.bbf';
const str5 = '~/5641';


for (let elem of expandBraces(str)) {
    console.log(elem)
}


// console.log(createTemplate(str3));
// console.log(applyGroup2(str3))


//--------------------------------------------
// function createTemplate(str){
//     //@param {string} input string
//     //@return {str}  template string '~/br0/*.br1'
//     const reg = /{[^{}]*({[^{}]*})?[^{}]*}/g;
//     const editable = str.match(reg);
//     let template = str;
//     editable.forEach((elem, i) => {
//         const reg1 = new RegExp(elem);
//         const name = `br${i}`;
//         template = template.replace(reg1, name);
//     });
//     return template;
// }

// function applyGroup(str,arr,resultArray){

//     //@param {str} name of string in template string, example: 'br1','br0' ... 
//     //@param {array} array of possible strings
//     //@param {array} result array of string
 
//     //@return {array} 
//     const numOfRepeats=resultArray.length/arr.length;
//     let k=0;

//     for (let i=0;i<numOfRepeats;i++){

//         for (let j=0;j<arr.length;j++){
//             const elem=arr[j];
//             resultArray[k]=resultArray[k].replace(str,elem)
//             k++;
//         }   
//     }

//     return resultArray; 
// }
// function createResArray(groupArr,template){
//     //@param {str} template  string
//     //@param {array} array of possible strings
//     //@return {array} 
//     const dimensionResArray=groupArr.reduce((acc,elem)=>acc*elem.length,1);
//     const resultArray=[];
//     for (let i=0;i<dimensionResArray;i++){
//         resultArray.push(template)
//     }
//     return resultArray;
// }