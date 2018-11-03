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
};


function getPokerHandRank(hand) {

    if (checkStraightFlush(hand)) return PokerRank.StraightFlush;
    if (checkFourOfKind(hand)) return PokerRank.StraightFlush;
    if (checkFullHouse(hand)) return PokerRank.StraightFlush;
    if (checkFlush(hand)) return PokerRank.StraightFlush;
    if (checkStraight(hand)) return PokerRank.StraightFlush;
    if (checkThreeOfKind(hand)) return PokerRank.StraightFlush;
    if (checkTwoPairs(hand)) return PokerRank.StraightFlush;
    if (checkOnePair(hand)) return PokerRank.StraightFlush;
    return PokerRank.HighCard;

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
    //if Ace:1
    const order1=hand.map(card=>{
        return cardOrder[card[0]]||10;
    });
    order1.sort((a,b)=>a-b)
    const diff1=order1.map((elem,i,arr)=>{
        const curr=elem;
        const next=arr[i+1]||curr+1;
        return next-curr;
    });

    //if Ace:14
    const order2=hand.map(card=>{
      if (card[0]==='A') return 14;
      return cardOrder[card[0]]||10;
    });
    order2.sort((a,b)=>a-b)
    const diff2=order2.map((elem,i,arr)=>{
      const curr=elem;
      const next=arr[i+1]||curr+1;
      return next-curr;
    });

    const checkSF2= diff1.every(elem=>elem===1) ||
                    diff2.every(elem=>elem===1);


    return checkSF2 && checkSF2;
}
function checkFourOfKind(hand){

    const comb1=hand.filter(card=>hand[0][0]===card[0]);
    const comb2=hand.filter(card=>hand[1][0]===card[0]);
    return (comb1.length===4) || (comb2.length===4)
}
function checkFullHouse(hand){
    const comb1=hand.filter(card=>hand[0][0]===card[0]);
    const comb2=hand.filter(card=>hand[0][0]!==card[0]);

    //check comb2 for similar cards
    const condtoComb2=comb2.every(card=> comb2[0][0]===card[0]);

    return ((comb1.length===2) && (comb2.length===3) && condtoComb2) ||
           ((comb1.length===3) && (comb2.length===2) && condtoComb2)
}
function checkFlush(hand){
    return  hand.every(card=>card[card.length-1]==="♥") ||
            hand.every(card=>card[card.length-1]==="♦") ||
            hand.every(card=>card[card.length-1]==="♠") ||
            hand.every(card=>card[card.length-1]==="♣");
}
function checkStraight(hand){
    //get array with with view of [1,1,...,1,1] if order is correct
    //if Ace:1
    const order1=hand.map(card=>{
      return cardOrder[card[0]]||10;
    });
    order1.sort((a,b)=>a-b);
    const diff1=order1.map((elem,i,arr)=>{
      const curr=elem;
      const next=arr[i+1]||curr+1;
      return next-curr;
    });

    //if Ace:14
    const order2=hand.map(card=>{
      if (card[0]==='A') return 14;
      return cardOrder[card[0]]||10;
    });
    order2.sort((a,b)=>a-b);
    const diff2=order2.map((elem,i,arr)=>{
      const curr=elem;
      const next=arr[i+1]||curr+1;
      return next-curr;
    });

    return  diff1.every(elem=>elem===1) ||
            diff2.every(elem=>elem===1);
}
function checkThreeOfKind(hand){

    const comb1=hand.filter(card=>hand[0][0]===card[0]);
    const comb2=hand.filter(card=>hand[1][0]===card[0]);
    const comb3=hand.filter(card=>hand[2][0]===card[0]);

    return (comb1.length===3) || (comb2.length===3) || (comb3.length===3)
}
function checkTwoPairs(hand) {
    const comb1=hand.filter(card=>hand[0][0]===card[0]);
    const comb2=hand.filter(card=>hand[1][0]===card[0]);
    const comb3=hand.filter(card=>hand[2][0]===card[0]);
    const comb4=hand.filter(card=>hand[3][0]===card[0]);
console.log([comb1,comb2,comb3,comb4])

    const combLengthTwo=[comb1,comb2,comb3,comb4]
                          .filter(elem=>elem.length===2);

    return combLengthTwo.length>=3;
}
function checkOnePair(hand) {
  const comb1=hand.filter(card=>hand[0][0]===card[0]);
  const comb2=hand.filter(card=>hand[1][0]===card[0]);
  const comb3=hand.filter(card=>hand[2][0]===card[0]);
  const comb4=hand.filter(card=>hand[3][0]===card[0]);

  const combLengthTwo=[comb1,comb2,comb3,comb4]
    .filter(elem=>elem.length===2);

  return  combLengthTwo.length===1 ||
          combLengthTwo.length===2
}
// function checkHighCard(hand) {
//     const OrderArr=hand.map(card=>{
//       if (card[0]==='A') return 14;
//       return cardOrder[card[0]];
//     })
//
// }




const h1=[ 'A♠','4♠','3♠','5♠','2♠' ];
const h2=[ '4♣','4♦','4♥','4♠','10♥' ];
const h3=[ '4♣','4♦','5♦','5♠','5♥' ];
const h4=[ '4♣','5♣','6♣','7♣','Q♣' ];
const h5=[ '2♠','3♥','4♥','5♥','6♥' ];
const h6=[ '2♥','4♦','5♥','A♦','3♠' ];
const h7=[ '8♥','3♠','2♦','7♥','1♥' ];
const h8=[ '2♥','4♦','4♥','A♦','A♠' ] ;
const h9=[ '3♥','4♥','10♥','3♦','A♠' ];
const h10=[ 'A♥','K♥','Q♥','2♦','3♠' ];
const h11=['A♠','Q♠','J♠','10♠','9♠']
// console.log(getPokerHandRank())
console.log(checkStraightFlush(h2));
console.log(checkFourOfKind(h2));
// console.log(checkFullHouse(h3));
// console.log(checkFlush(h4));
// console.log(checkStraight(h6))
// console.log(checkThreeOfKind(h7));
// console.log(checkTwoPairs(h8));
// console.log(checkOnePair(h10));


