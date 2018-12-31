/**
 * Takes two strings including only letters from a to z.
 * Returns a new sorted string containing distinct letters.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'azy', 'bk' => 'abkyz'
 *   'zxxlal','laxk'    => 'aklxz'
 *   'abcdefghijklmnop',  'lmnopqrstuvwxyz'  => 'abcdefghijklmnopqrstuvwxyz'
 */
function distinctLettersString(value1, value2) {

  const initialArr = [value1, value2];
  const letters = {};

  initialArr.forEach(str => {
    str.split('').forEach(letter => {
      letters[letter] = 1;
    });
  });

  const keys = Object.keys(letters);
  const sortArr = keys.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  return sortArr.join('');
}


/**
 * Takes a string with any characters.
 * Returns an object containing appearence of every distinct letters in lower case.
 *
 * @param {string} value
 * @return {Object}
 *
 * @example
 *  'Who you are, Buddy?' => { a:1, d:2, e:1, h:1, o:2, r:1, u:2, y:2 }
 *
 */

function lowerLetters(value) {
  const lettersObj = {};
  const reg = /[a-z]*/g;
  const lettersArr = value.match(reg).join('').split('');

  lettersArr.forEach(elem => {
    lettersObj[elem] = lettersObj[elem] + 1 || 1;
  });

  return lettersObj;
}

/**
 * Write a function that will convert a string into title case, given an optional
 * list of exception (minor words). The list of minor words will be given as a
 * string with each word separated by a space. Your function should ignore the
 * case of the minor words string - it should behave in the same way even if the
 * case of the minor word is changed
 *
 * @param {string} the original string to be converted
 * @param {string} list of minor words that must always be lowercase except for
 *                  the first word in the string
 * @return {string}
 *
 * @example
 *    'a clash if KINGS', 'a an the of'  =>  'A Clash of Kings'
 *    'THE WIND IN THE WILLOWS', 'The In'  => 'The Wind in the Willows'
 *    'the quick brown fox'  => 'The Quick Brown Fox'
 */

function titleCaseConvert(title, minorWords) {
  if (!minorWords) minorWords = '';

  const lowerTitleArr = title.toLowerCase().split(' ');
  const minorWordsArr = minorWords.split(' ').map(word => word.toLowerCase());

  const resultTitleArr = lowerTitleArr.map((word, i) => {
    if (minorWordsArr.includes(word) && i !== 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  });

  return resultTitleArr.join(' ');
}

/**
 * Your job is to create a calculator which evaluates expressions in Reverse Polish
 * notation (https://en.wikipedia.org/wiki/Reverse_Polish_notation). Empty expression
 * should evaluate to 0. Expression without operation returns the last number.
 *
 * @param {string} RPN string, each number and operation separated by a space
 *
 * @return {Number}
 *
 * @example
 *  ''  =>  0  // empty expression returns 0
 *  '1 2 3'  =>  3  // expression without operation returns the last number
 *  '4 2 +'  =>  6  // 4 + 2
 *  '2 5 * 2 + 3 /'  =>  4   //  ((5 * 2) + 2) / 3
 *  '5 1 2 + 4 * + 3 -'  =>  14   // 5 + ((1 + 2) * 4) -3
 */

function calcRPN(expr) {
  if (!expr) return 0;

  const orerandReg = /\*|\+|-|\//;
  let buffer = [];
  let exprArr = expr.split(' ');


  if (!orerandReg.test(expr)) return exprArr[exprArr.length - 1];

  while (exprArr.length !== 1) {

    for (let i = 0; i < exprArr.length; i++) {
      const elem = exprArr[i];

      let prevPrevElem;
      let prevElem;

      if (i >= 2) {
        prevElem = exprArr[i - 1];
        prevPrevElem = exprArr[i - 2];
      }

      if (orerandReg.test(elem) && i >= 2) {
        buffer = [prevPrevElem, prevElem];
        const newvalue = countBuffer(buffer, elem);
        exprArr = [].concat(
          exprArr.slice(0, i - 2),
          [newvalue],
          exprArr.slice(i + 1)
        );
        break;
      }
    }
  }

  return exprArr[0];
}

function countBuffer(buffer, operand) {
  return eval(buffer.join(operand));
}


module.exports = {
  distinctLettersString,
  lowerLetters,
  titleCaseConvert,
  calcRPN
};