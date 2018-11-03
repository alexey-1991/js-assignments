
/**
 * Returns the bank account number parsed from specified string.
 *
 * You work for a bank, which has recently purchased an ingenious machine to assist
 * in reading letters and faxes sent in by branch offices.
 * The machine scans the paper documents, and produces a string with a bank account
 * that looks like this:
 *
 *    _  _     _  _  _  _  _
 *  | _| _||_||_ |_   ||_||_|
 *  ||_  _|  | _||_|  ||_| _|
 *
 * Each string contains an account number written using pipes and underscores.
 * Each account number should have 9 digits, all of which should be in the range 0-9.
 *
 * Your task is to write a function that can take bank account string and parse it
 * into actual account numbers.
 *
 * @param {string} bankAccount
 * @return {number}
 *
 * Example of return :
 *
 *   '    _  _     _  _  _  _  _ \n'+
 *   '  | _| _||_||_ |_   ||_||_|\n'+     =>  123456789
 *   '  ||_  _|  | _||_|  ||_| _|\n'
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
 *   '|_||_  _||_| _||_|  ||_| _|\n',
 *
 *   ' _  _  _  _  _  _  _  _  _ \n'+
 *   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
 *   '|_||_  _||_| _||_| _||_| _|\n',
 *
 */
export function parseBankAccount(bankAccount) {

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


/**
 * Returns the string, but with line breaks inserted at just the right places to make
 * sure that no line is longer than the specified column number.
 * Lines can be broken at word boundaries only.
 *
 * @param {string} text
 * @param {number} columns
 * @return {Iterable.<string>}
 *
 * @example :
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 26 =>
 *      'The String global object',
 *      'is a constructor for',
 *      'strings, or a sequence of',
 *      'characters.'
 *
 *  'The String global object is a constructor for strings, or a sequence of characters.', 12 =>
 *      'The String',
 *      'global',
 *      'object is a',
 *      'constructor',
 *      'for strings,',
 *      'or a',
 *      'sequence of',
 *      'characters.'
 */
export function* wrapText(text, columns) {

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


/**
 * Returns the rank of the specified poker hand.
 * See the ranking rules here: https://en.wikipedia.org/wiki/List_of_poker_hands.
 *
 * @param {array} hand
 * @return {PokerRank} rank
 *
 * @example
 *   [ '4♥','5♥','6♥','7♥','8♥' ] => PokerRank.StraightFlush
 *   [ 'A♠','4♠','3♠','5♠','2♠' ] => PokerRank.StraightFlush
 *   [ '4♣','4♦','4♥','4♠','10♥' ] => PokerRank.FourOfKind
 *   [ '4♣','4♦','5♦','5♠','5♥' ] => PokerRank.FullHouse
 *   [ '4♣','5♣','6♣','7♣','Q♣' ] => PokerRank.Flush
 *   [ '2♠','3♥','4♥','5♥','6♥' ] => PokerRank.Straight
 *   [ '2♥','4♦','5♥','A♦','3♠' ] => PokerRank.Straight
 *   [ '2♥','2♠','2♦','7♥','A♥' ] => PokerRank.ThreeOfKind
 *   [ '2♥','4♦','4♥','A♦','A♠' ] => PokerRank.TwoPairs
 *   [ '3♥','4♥','10♥','3♦','A♠' ] => PokerRank.OnePair
 *   [ 'A♥','K♥','Q♥','2♦','3♠' ] =>  PokerRank.HighCard
 */
export const PokerRank = {
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

export function getPokerHandRank(hand) {
  if (checkStraightFlush(hand)) return PokerRank.StraightFlush;
  if (checkFourOfKind(hand)) return PokerRank.FourOfKind;
  if (checkFullHouse(hand)) return PokerRank.FullHouse;
  if (checkFlush(hand)) return PokerRank.Flush;
  if (checkStraight(hand)) return PokerRank.Straight;
  if (checkThreeOfKind(hand)) return PokerRank.ThreeOfKind;
  if (checkTwoPairs(hand)) return PokerRank.TwoPairs;
  if (checkOnePair(hand)) return PokerRank.OnePair;
  return PokerRank.HighCard;
}





/**
 * Returns the rectangles sequence of specified figure.
 * The figure is ASCII multiline string comprised of minus signs -, plus signs +,
 * vertical bars | and whitespaces.
 * The task is to break the figure in the rectangles it is made of.
 *
 * NOTE: The order of rectanles does not matter.
 *
 * @param {string} figure
 * @return {Iterable.<string>} decomposition to basic parts
 *
 * @example
 *
 *    '+------------+\n'+
 *    '|            |\n'+
 *    '|            |\n'+        '+------------+\n'+
 *    '|            |\n'+        '|            |\n'+         '+------+\n'+          '+-----+\n'+
 *    '+------+-----+\n'+   =>   '|            |\n'+     ,   '|      |\n'+     ,    '|     |\n'+
 *    '|      |     |\n'+        '|            |\n'+         '|      |\n'+          '|     |\n'+
 *    '|      |     |\n'         '+------------+\n'          '+------+\n'           '+-----+\n'
 *    '+------+-----+\n'
 *
 *
 *
 *    '   +-----+     \n'+
 *    '   |     |     \n'+                                    '+-------------+\n'+
 *    '+--+-----+----+\n'+              '+-----+\n'+          '|             |\n'+
 *    '|             |\n'+      =>      '|     |\n'+     ,    '|             |\n'+
 *    '|             |\n'+              '+-----+\n'           '+-------------+\n'
 *    '+-------------+\n'
 */
export function* getFigureRectangles(figure) {
  /* implement your code here */
  throw new Error('Not implemented');
}
