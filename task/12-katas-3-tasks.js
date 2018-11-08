
/**
 * Returns true if word occurrs in the specified word snaking puzzle.
 * Each words can be constructed using 'snake' path inside a grid with top, left,
 * right and bottom directions.
 * Each char can be used only once ('snake' should not cross itself).
 *
 * @param {array} puzzle
 * @param {array} searchStr
 * @return {bool}
 *
 * @example
 *   var puzzle = [
 *      'ANGULAR',
 *      'REDNCAE',
 *      'RFIDTCL',
 *      'AGNEGSA',
 *      'YTIRTSP',
 *   ];
 *   'ANGULAR'   => true   (first row)
 *   'REACT'     => true   (starting from the top-right R adn follow the ↓ ← ← ↓ )
 *   'UNDEFINED' => true
 *   'RED'       => true
 *   'STRING'    => true
 *   'CLASS'     => true
 *   'ARRAY'     => true   (first column)
 *   'FUNCTION'  => false
 *   'NULL'      => false
 */
export function findStringInSnakingPuzzle(puzzle, searchStr) {
  const puzzleArray = puzzle.map(elem => {
    return elem.split('');
  });


  for (let i = 0; i < puzzleArray.length; i++) {
    for (let j = 0; j < puzzleArray[0].length; j++) {
      const workArray = [].concat(puzzleArray);
      const columns = workArray[0].length - 1;
      const rows = workArray.length - 1;

      let m = 0;

      let row = i;
      let col = j;

      if (workArray[i][j] !== searchStr[m]) continue;
      workArray[row][col] = null;
      m++;

      while (m !== searchStr.length) {

        if (row - 1 >= 0) {
          if (workArray[row - 1][col] === searchStr[m]) {
            row = row - 1;
            workArray[row][col] = null;
            m++;
            continue;
          }
        }

        if (col - 1 >= 0) {
          if (workArray[row][col - 1] === searchStr[m]) {
            col = col - 1;
            workArray[row][col] = null;
            m++;
            continue;
          }
        }

        if (col + 1 <= columns) {
          if (workArray[row][col + 1] === searchStr[m]) {
            col = col + 1;
            workArray[row][col] = null;
            m++;
            continue;
          }
        }

        if (row + 1 <= rows) {
          if (workArray[row + 1][col] === searchStr[m]) {
            row = row + 1;
            workArray[row][col] = null;
            m++;
            continue;
          }
        }

        break;
      }

      if (m === searchStr.length) return true;

    }
  }

  return false;
}


/**
 * Returns all permutations of the specified string.
 * Assume all chars in the specified string are different.
 * The order of permutations does not matter.
 *
 * @param {string} chars
 * @return {Iterable.<string>} all posible strings constructed with the chars from
 *    the specfied string
 *
 * @example
 *    'ab'  => 'ab','ba'
 *    'abc' => 'abc','acb','bac','bca','cab','cba'
 */
export function* getPermutations(chars) {
  const n = fact(chars.length);
  const array = chars.split('');

  for (let j = 0; j < n; j++) {
    yield nth_permutation(array, j);
  }
}

function nth_permutation(array, index) {
  let result = '';
  let workArray = [].concat(array);
  const length = workArray.length;
  for (let i = 0; i < length; i++) {
    let item = index % workArray.length;
    index = Math.floor(index / workArray.length);
    result += workArray[item];
    workArray.splice(item, 1);
  }
  return result;
}

function fact(n) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
}


/**
 * Returns the most profit from stock quotes.
 * Stock quotes are stores in an array in order of date.
 * The stock profit is the difference in prices in buying and selling stock.
 * Each day, you can either buy one unit of stock, sell any number of stock units
 * you have already bought, or do nothing.
 * Therefore, the most profit is the maximum difference of all pairs in a sequence
 * of stock prices.
 *
 * @param {array} quotes
 * @return {number} max profit
 *
 * @example
 *    [ 1, 2, 3, 4, 5, 6]   => 15  (buy at 1,2,3,4,5 and then sell all at 6)
 *    [ 6, 5, 4, 3, 2, 1]   => 0   (nothing to buy)
 *    [ 1, 6, 5, 10, 8, 7 ] => 18  (buy at 1,6,5 and sell all at 10)
 */
export function getMostProfitFromStockQuotes(quotes) {
  /* implement your code here */
  throw new Error('Not implemented');
}


/**
 * Class representing the url shorting helper.
 * Feel free to implement any algorithm, but do not store link in the key\value stores.
 * The short link can be at least 1.5 times shorter than the original url.
 *
 * @class
 *
 * @example
 *
 *   var urlShortener = new UrlShortener();
 *   var shortLink = urlShortener.encode('https://en.wikipedia.org/wiki/URL_shortening');
 *   var original  = urlShortener.decode(shortLink); // => 'https://en.wikipedia.org/wiki/URL_shortening'
 *
 */
export function UrlShortener() {
  this.urlAllowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz' +
    '0123456789-_.~!*"();:@&=+$,/?#[]';
}

UrlShortener.prototype = {

  encode(url) {
    throw new Error('Not implemented');
  },

  decode(code) {
    throw new Error('Not implemented');
  }
};
