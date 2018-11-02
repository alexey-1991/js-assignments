function parseBankAccount(bankAccount) {
 
    const arr=bankAccount.split("\n").slice(0,-1);
    const stringNum=[];//array with numbers parsed from string
    const length=arr[0].length;
    let num=0;

    for (let i=0;i<length;i++){
        if ((i+1)%3===0){
            arr.forEach(elem=>{
                
                if (!stringNum[num]){
                    stringNum.push(elem.slice(i-2,i+1))
                } else {
                    
                    stringNum[num]+=elem.slice(i-2,i+1)
                } 
                
            })
            num++;
        }
    }

    const presets={
        "     |  |":"1",
        " _  _||_ ":"2",
        " _  _| _|":"3",
        "   |_|  |":"4",
        " _ |_  _|":"5",
        " _ |_ |_|":"6",
        " _   |  |":"7",
        " _ |_||_|":"8",
        " _ |_| _|":"9",
        " _ | ||_|":"0",
    }

    return +stringNum.reduce((acc,elem)=>{
        return acc+presets[elem];
    },"")
}


const str1= '    _  _     _  _  _  _  _ \n'+
            '  | _| _||_||_ |_   ||_||_|\n'+
            '  ||_  _|  | _||_|  ||_| _|\n'


console.log(parseBankAccount(str1)); 
