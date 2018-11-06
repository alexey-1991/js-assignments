function* mergeSortedSequences(source1, source2) {
    
    const iterator1=source1();
    const iterator2=source2();

    let num1=iterator1.next().value;
    let num2=iterator2.next().value;

    while (true){
        
        if(num1<=num2){
            yield num1;
            num1=iterator1.next().value;
            continue;
        } 
        if(num2<num1){
            yield num2;
            num2=iterator2.next().value;
            continue;
        }
        if (!num1) {
            yield num2;
            num2=iterator2.next().value;
            continue;
        }
        if (!num2) {
            yield num1;
            num1=iterator1.next().value;
            continue;
        }
        return console.log("Something Wrong!!!")
    }
}

const odds = function* () {
    
    for (let i = 1; true; i += 2) {
        // if (i>10) return;
        yield i;
    }
};
const evens = function* () {
   
    for (let i = 2; true; i += 2) {
        // if (i>10) return;
        yield i;
    }
};

const zero = function* () { yield -1; };




const sequence=mergeSortedSequences(odds,zero);
console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())



