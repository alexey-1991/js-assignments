
/** ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let value = false;
  if (num === 0) return 0;
  if (num % 3 === 0) value = 'Fizz';
  if (num % 5 === 0) value = (value === 'Fizz') ? 'FizzBuzz' : 'Buzz';

  return (!value) ? num : value;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  return (n !== 1) ? n * getFactorial(n - 1) : 1;
}



/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {

  return (n1 < n2) ? n1 + getSumBetweenNumbers(n1 + 1, n2) : n2;
}


/**
 * Returns true, if a triangle can be built with the specified sides a,b,c and false
 * in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return (a < b + c && b < a + c && c < b + a);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {

  const al = rect1.left, ar = rect1.left + rect1.width,
    at = rect1.top, ab = rect1.top + rect1.height;

  const bl = rect2.left, br = rect2.left + rect2.width,
    bt = rect2.top, bb = rect2.top + rect2.height;

  if ((ar <= bl && ar <= br) || (al >= bl && al >= br)) return false;
  if ((ab <= bt && ab <= bb) || (at >= bt && at >= bb)) return false;
  return true;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle({ center: c, radius }, { x, y }) {
  const R = Math.sqrt((c.x - x) * (c.x - x) + (c.y - y) * (c.y - y));
  return (R < radius);
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  if (!str) return null;
  const res = str.split('').find((elem, i, arr) => {
    return arr.filter(item => item === elem).length === 1;
  });
  return (res) ? res : null;
}


/**
 * Returns the string representation of math interval, specified by two points and
 * include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {

  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  return `${start}${Math.min(a, b)}, ${Math.max(a, b)}${end}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +`${num}`.split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {

  //Stage1
  const ccnString = ccn + '';
  const Stage1 = ccnString.split('');
  let Stage2 = [];

  //Stage2
  Stage2 = Stage1;
  for (let i = Stage1.length - 2; i >= 0; i -= 2) {
    if (2 * Stage1[i] >= 10) { Stage2[i] = 2 * Stage1[i] - 9; } 
    else { Stage2[i] = 2 * Stage1[i]; }
  }

  //Stage3
  const Stage3 = Stage2.reduce(function (sum, current) {
    return sum + +current;
  }, 0);

  //result

  if (Stage3 % 10 === 0) return true;
  return false;

}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const res = `${num}`.split('').reduce((acc, curr) => acc + +curr, 0);
  return (res > 9) ? getDigitalRoot(res) : res;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {

  const brackets = ['()', '[]', '{}', '<>'];
  let workString = str;

  for (let i = 0; i <= brackets.length - 1; i++) {
    while (workString.indexOf(brackets[i]) >= 0) {

      workString = workString.replace(brackets[i], '');

      if (workString.indexOf(brackets[i]) === -1) { i = -1; }
    }
  }
  return (workString === '');
}


/**
 * Returns the human readable string of time period specified by the start and end time.
 * The result string should be constrcuted using the folliwing rules:
 *
 * ---------------------------------------------------------------------
 *   Difference                 |  Result
 * ---------------------------------------------------------------------
 *    0 to 45 seconds           |  a few seconds ago
 *   45 to 90 seconds           |  a minute ago
 *   90 seconds to 45 minutes   |  2 minutes ago ... 45 minutes ago
 *   45 to 90 minutes           |  an hour ago
 *  90 minutes to 22 hours      |  2 hours ago ... 22 hours ago
 *  22 to 36 hours              |  a day ago
 *  36 hours to 25 days         |  2 days ago ... 25 days ago
 *  25 to 45 days               |  a month ago
 *  45 to 345 days              |  2 months ago ... 11 months ago
 *  345 to 545 days (1.5 years) |  a year ago
 *  546 days+                   |  2 years ago ... 20 years ago
 * ---------------------------------------------------------------------
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @return {string}
 *
 * @example
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:00.200')  => 'a few seconds ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-01 01:00:05.000')  => '5 minutes ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2000-01-02 03:00:05.000')  => 'a day ago'
 *   Date('2000-01-01 01:00:00.100'), Date('2015-01-02 03:00:05.000')  => '15 years ago'
 *
 */
function timespanToHumanString(startDate, endDate) {

  const date0 = +startDate;
  const date1 = +endDate;

  const diff = date1 - date0;

  //time variables
  const seconds = 1000;
  const min = 60 * 1000;
  const hours = 60 * 60 * 1000;
  const days = 24 * hours;
  const months = 30 * days;
  const years = 365 * days;

  //diff time
  const dmin = Math.round((diff - 1) / min);
  const dhours = Math.round((diff - 1) / hours);
  const ddays = Math.round((diff - 1) / days);
  const dmonths = Math.round((diff - 1) / months);
  const dyears = Math.round((diff - 1) / years);

  // Condition
  if (diff >= 0 && diff <= 45 * seconds) return 'a few seconds ago';
  if (diff > 45 * seconds && diff <= 90 * seconds) return 'a minute ago';
  if (diff > 90 * seconds && diff <= 45 * min) return `${dmin} minutes ago`;
  if (diff > 45 * min && diff <= 90 * min) return `an hour ago`;
  if (diff > 90 * min && diff <= 22 * hours) return `${dhours} hours ago`;
  if (diff > 22 * hours && diff <= 36 * hours) return `a day ago`;
  if (diff > 36 * hours && diff <= 25 * days) return `${ddays} days ago`;
  if (diff > 25 * days && diff <= 45 * days) return `a month ago`;
  if (diff > 45 * days && diff <= 345 * days) return `${dmonths} months ago`;
  if (diff > 345 * days && diff <= 545 * days) return `a year ago`;
  if (diff > 546 * days) return `${dyears} years ago`;


}


/**
   * Returns the string with n-ary (binary, ternary, etc, where n<=10) representation of
 * specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the commom directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {

  let myObj = { '': '' };
  let result = '';
  let i = 0;

  while (Object.keys(myObj).length === 1) {
    result += Object.keys(myObj)[0];
    myObj = {};

    for (const elem of pathes) {
      myObj[elem[i]] = 0;
    }

    i++;
  }

  if (result.length > 0) {
    while (result[result.length - 1] !== '/') {
      result = result.slice(0, -1);
    }
  }
  return result;

}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {

  const height1 = m1.length;
  const width2 = m2[0].length;

  const widthRes = height1;
  const heightRes = width2;

  const result = new Array(heightRes);


  for (let row = 0; row < heightRes; row++) {
    result[row] = new Array(widthRes);

    for (let col = 0; col < widthRes; col++) {
      result[row][col] = getValue(m1, m2, row, col);
    }
  }

  return result;
}

function getValue(m1, m2, row, col) {
  const width1 = m1[0].length;
  let value = 0;

  for (let i = 0; i < width1; i++) {
    value = value + m1[row][i] * m2[i][col];
  }

  return value;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const dimension = position.length;

  //check rows (horizont)
  for (let row = 0; row < dimension; row++) {
    //condition below is needed to remove empty spaces
    const currentRow = position[row].join('').split('');
    if (currentRow.length !== dimension) continue;


    if (position[row].every(elem => elem === '0')) {
      return '0';
    }

    if (position[row].every(elem => elem === 'X')) {
      return 'X';
    }
  }


  //check columns (vertical)
  for (let col = 0; col < dimension; col++) {
    const currentCol = [];
    for (let row = 0; row < dimension; row++) {
      currentCol.push(position[row][col]);
    }


    if (currentCol.join('').split('').length !== dimension) continue;

    if (currentCol.every(elem => elem === '0')) {
      return '0';
    }
    if (currentCol.every(elem => elem === 'X')) {
      return 'X';
    }
  }

  //check diagonal1
  const diagonal1 = [];
  let c1 = 0;
  let r1 = 0;
  while (r1 <= dimension - 1 && c1 <= dimension - 1) {

    diagonal1.push(position[r1][c1]);
    r1++;
    c1++;
  }

  if (diagonal1.join('').split('').length === dimension) {

    if (diagonal1.every(elem => elem === '0')) {
      return '0';
    }
    if (diagonal1.every(elem => elem === 'X')) {
      return 'X';
    }

  }

  //check diagonal2
  const diagonal2 = [];
  let c2 = dimension - 1;
  let r2 = 0;
  while (r2 <= dimension - 1 && c2 >= 0) {
    diagonal2.push(position[r2][c2]);
    r2++;
    c2--;
  }

  if (diagonal2.join('').split('').length === dimension) {

    if (diagonal2.every(elem => elem === '0')) {
      return '0';
    }
    if (diagonal2.every(elem => elem === 'X')) {
      return 'X';
    }
  }

  return undefined;
}


module.exports = {
  getFizzBuzz: getFizzBuzz,
  getFactorial: getFactorial,
  getSumBetweenNumbers: getSumBetweenNumbers,
  isTriangle: isTriangle,
  doRectanglesOverlap: doRectanglesOverlap,
  isInsideCircle: isInsideCircle,
  findFirstSingleChar: findFirstSingleChar,
  getIntervalString: getIntervalString,
  reverseString: reverseString,
  reverseInteger: reverseInteger,
  isCreditCardNumber: isCreditCardNumber,
  getDigitalRoot: getDigitalRoot,
  isBracketsBalanced: isBracketsBalanced,
  timespanToHumanString: timespanToHumanString,
  toNaryString: toNaryString,
  getCommonDirectoryPath: getCommonDirectoryPath,
  getMatrixProduct: getMatrixProduct,
  evaluateTicTacToePosition: evaluateTicTacToePosition
};