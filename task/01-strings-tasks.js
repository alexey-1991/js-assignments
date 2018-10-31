
/** *****************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
export function concatenateStrings(value1, value2) {
  return value1+value2;
  // throw new Error('Not implemented');
}

/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
export function getStringLength(value) {
  /* implement your code here */

  return value.length;
  // throw new Error('Not implemented');
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
export function getStringFromTemplate(firstName, lastName) {
  return 'Hello, '+firstName+' '+lastName+'!';
  // throw new Error('Not implemented');
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
export function  extractNameFromTemplate(value) {
  return value.slice(7, -1);
  // throw new Error('Not implemented');
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
export function getFirstChar(value) {
  let A=value.charAt(0);
  return A;
  // throw new Error('Not implemented');
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
export function removeLeadingAndTrailingWhitespaces(value) {

  let arr=value.split('');
  while (arr[0]===' ' || arr[0]==='\t') {
    arr.splice(0, 1);
  }
  while (arr[arr.length-1]===' ' ) {
    arr.splice(arr.length-1, 1);
  }
  let str=arr.join('');

  return str;
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
export function repeatString(value, count) {

  let result=value;
  for (let i=1;i<count;i++){
    result+=value;
  }
  return result;
  // throw new Error('Not implemented');
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
export function removeFirstOccurrences(str, value)  {
  let A=str.indexOf(value);
  let B=value.split('');
  let arr=str.split('');
  if (A>0) {arr.splice(A, B.length);}
  return arr.join('');
  // throw new Error('Not implemented');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
export function unbracketTag(str) {
  return str.split('').slice(1, -1).join('');
  // throw new Error('Not implemented');
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
export function convertToUpperCase(str) {
  return str.toUpperCase();
  // throw new Error('Not implemented');
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' =>
 *     ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
export function extractEmails(str) {
  return str.split(';');
  // throw new Error('Not implemented');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
export function getRectangleString(width, height) {
  let result="";

  for (let row=1;row<=height;row++){
      
      switch (row){
          case 1:

              for (let col=1; col<=width; col++){
                  switch (col){
                      case 1:
                          result=result+"┌";
                          break;
                      case width:
                          result=result+"┐\n";
                          break;
                      default:
                          result=result+"─";
                          break;

                  }
              }

              break;

          case height:

              for (let col=1; col<=width; col++){
                  switch (col){
                      case 1:
                          
                          result=result+"└";
                          break;
                      case width:
                          result=result+"┘\n";
                          break;
                      default:
                          result=result+"─";
                          break;
                  }
              }
              break;

          default:

              for (let col=1; col<=width; col++){
                  switch (col){
                      case 1:
                          result=result+"│";
                          break;
                      case width:
                          result=result+"│\n";
                          break;
                      default:
                          result=result+" ";
                          break;
                  }
              }
              break;

      }

  }

  return result;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' =>
 *          'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */


export function encodeToRot13(str) {

//  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' =>
//        'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  let strEng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ?!';
  let strRot = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm ?!';
  let Alphabeth = {};
  let j = 0;

  for (let i of strEng) {
    Alphabeth[i] = strRot[j];
    j++;
  }

  let result = '';
  for (let i of str) {
    result += Alphabeth[i];
  }

  return result;
}


/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
export function isString(str) {
  let result = false;
  try {

    if (str.charAt(1)) {
      return result = true;
    }else{
      throw new Error();

    }

  } catch (e){

  }

  return result;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
export function getCardId(value) {
  let myAlpha={};
  let cardsArr=['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
  for (let i=0;i<=cardsArr.length-1;i++){
    myAlpha[cardsArr[i]]=i;
  }
  return myAlpha[value];
}
