const PokerRank = {
    StraightFlush: 8,
    FourOfKind: 7,
    FullHouse: 6,
    Flush: 5,
    Straight: 4,
    ThreeOfKind: 3,
    TwoPairs: 2,
    OnePair: 1,
    HighCard: 0
  };

const cardOrder={
    "A":1,
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "J":11,
    "Q":12,
    "K":13,
}


function getPokerHandRank(hand) {
    
    


}

function checkStraightFlush(hand){
    //check for similar ♥ ♦ ♣ ♠
    const reg1=/♥/;
    const reg2=/♦/;
    const reg3=/♣/;
    const reg4=/♠/;

    const checkSF1=(
        hand.every(card=>reg1.test(card))||
        hand.every(card=>reg2.test(card))||
        hand.every(card=>reg3.test(card))||
        hand.every(card=>reg4.test(card))
    );
    
    if (!checkSF1) return false;

    //get array with with view of [1,1,...,1,1] if order is correct
    const handForChange=hand.map(card=>{
        return cardOrder[card[0]];
    })
    handForChange.sort((a,b)=>a-b)
    const diff=handForChange.map((elem,i,arr)=>{
        const curr=elem;
        const next=arr[i+1]||curr+1;
        return next-curr;
    })
    const checkSF2=diff.every(elem=>elem===1)


    return checkSF2 && checkSF2;
}


const h1=[ 'A♠','4♠','3♠','5♠','2♠' ];
// console.log(getPokerHandRank())
console.log(checkStraightFlush(h1));

