
/**
 * Returns the array of 32 compass points and heading.
 * See details here:
 * https://en.wikipedia.org/wiki/Points_of_the_compass#32_cardinal_points
 *
 * @return {array}
 *
 * Example of return :
 *  [
 *     { abbreviation : 'N',     azimuth : 0.00 ,
 *     { abbreviation : 'NbE',   azimuth : 11.25 },
 *     { abbreviation : 'NNE',   azimuth : 22.50 },
 *       ...
 *     { abbreviation : 'NbW',   azimuth : 348.75 }
 *  ]
 */
function createCompassPoints(sides = ['N', 'E', 'S', 'W']) {
  let azimuth = 0.00;
  let stepAzimuth = 11.25;
  let currentIndex = 1;
  let result = [
    { abbreviation: sides[0], azimuth: azimuth }
  ];

  while (currentIndex <= 3) {

    let pV = sides[currentIndex - 1]; // previousValue
    let cV = sides[currentIndex]; //currentValue
    let nV = sides[currentIndex + 1]; //nextValue
    if (!nV) { nV = sides[0]; }


    azimuth += stepAzimuth;
    result.push({ abbreviation: `${pV}b${cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${pV + pV + cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${pV + cV}b${pV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${pV + cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${pV + cV}b${cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${cV + pV + cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${cV}b${pV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${cV}b${nV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${cV + nV + cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${nV + cV}b${cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${nV + cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${nV + cV}b${nV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${nV + nV + cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    result.push({ abbreviation: `${nV}b${cV}`, azimuth: azimuth });

    azimuth += stepAzimuth;
    if (azimuth !== 360) {
      result.push({ abbreviation: `${nV}`, azimuth: azimuth });
    }

    currentIndex += 2;
  }

  return result;
}


/**
 * Expand the braces of the specified string.
 * See https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion
 *
 * In the input string, balanced pairs of braces containing comma-separated substrings
 * represent alternations that specify multiple alternatives which are to appear
 * at that position in the output.
 *
 * @param {string} str
 * @return {Iterable.<string>}
 *
 * NOTE: The order of output string does not matter.
 *
 * Example:
 *   '~/{Downloads,Pictures}/*.{jpg,gif,png}'  => '~/Downloads/*.jpg',
 *                                                '~/Downloads/*.gif'
 *                                                '~/Downloads/*.png',
 *                                                '~/Pictures/*.jpg',
 *                                                '~/Pictures/*.gif',
 *                                                '~/Pictures/*.png'
 *
 *   'It{{em,alic}iz,erat}e{d,}, please.'  => 'Itemized, please.',
 *                                            'Itemize, please.',
 *                                            'Italicized, please.',
 *                                            'Italicize, please.',
 *                                            'Iterated, please.',
 *                                            'Iterate, please.'
 *
 *   'thumbnail.{png,jp{e,}g}'  => 'thumbnail.png'
 *                                 'thumbnail.jpeg'
 *                                 'thumbnail.jpg'
 *
 *   'nothing to do' => 'nothing to do'
 */
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

  const regTemplate=/[#]br\d[#]/g;
  let cond=resultArr.find(elem=>regTemplate.test(elem));

  
  while (cond){
    groupArr.forEach((group, i)=>{

      const name=`#br${i}#`;
      resultArr=applyGroup2(name, group, resultArr);
          
    });  
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
  
  while (reg.test(str)){
    const editable = str.match(reg);
    editable.forEach(elem=>{
      const name=`#br${group.length}#`;
      str=str.replace(elem, name);
      group.push(elem.slice(1, -1).split(','));
    });
  }

  return {group:group, str:str};
}
function applyGroup2(str, arr, resultArray){

  //@param {str} name of string in template string, example: 'br1','br0' ... 
  //@param {array} array of possible strings
  //@param {array} result array of string

  //@return {array} 

  const newResultArray=[];

  for (const item of resultArray){
    for (const elem of arr){
      newResultArray.push(item.replace(str, elem)); 
    }
  }

  return (newResultArray.length)? newResultArray : resultArray;
  
}
function removeRepeats(array){
  //@param {array} result array of string elements
  //@return {array} array whithout repeating strings

  const obj={};
  array.forEach(elem=>obj[elem]=1);
  return Object.keys(obj);
}


/**
 * Returns the ZigZag matrix
 *
 * The fundamental idea in the JPEG compression algorithm is to sort coefficient
 * of given image by zigzag path and encode it.
 * In this task you are asked to implement a simple method to create a zigzag square matrix.
 * See details at https://en.wikipedia.org/wiki/JPEG#Entropy_coding
 * and zigzag path here: https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/JPEG_ZigZag.svg/220px-JPEG_ZigZag.svg.png
 *
 * @param {number} n - matrix dimension
 * @return {array}  n x n array of zigzag path
 *
 * @example
 *   1  => [[0]]
 *
 *   2  => [[ 0, 1 ],
 *          [ 2, 3 ]]
 *
 *         [[ 0, 1, 5 ],
 *   3  =>  [ 2, 4, 6 ],
 *          [ 3, 7, 8 ]]
 *
 *         [[ 0, 1, 5, 6 ],
 *   4 =>   [ 2, 4, 7,12 ],
 *          [ 3, 8,11,13 ],
 *          [ 9,10,14,15 ]]
 *
 */
function getZigZagMatrix(n) {
  let i = 0;
  let j = 0;
  let value = 0;


  // creating Array

  //Second way to create Array
  let result = [];

  for (let x = 0; x <= n - 1; x++) {
    result[x] = [];
    for (let y = 0; y <= n - 1; y++) {
      result[x][y] = 1;
    }
  }


  // fill Array
  result[i][j] = value;

  while (i !== n - 1 || j !== n - 1) {

    if (result[i][j + 1]) {
      result[i][++j] = ++value;
    } else {
      result[++i][j] = ++value;
    }

    if (result[i + 1]) {
      while (result[i + 1][j - 1]) {
        result[++i][--j] = ++value;
        if (!result[i + 1]) break;
      }
    }


    if (result[i + 1]) {
      result[++i][j] = ++value;
    } else {
      result[i][++j] = ++value;
    }

    if (result[i - 1]) {
      while (result[i - 1][j + 1]) {
        result[--i][++j] = ++value;
        if (!result[i - 1]) break;
      }
    }

  }

  return result;
}


/**
 * Returns true if specified subset of dominoes can be placed in a row accroding to the game rules.
 * Dominoes details see at: https://en.wikipedia.org/wiki/Dominoes
 *
 * Each domino tile presented as an array [x,y] of tile value.
 * For example, the subset [1, 1], [2, 2], [1, 2] can be arranged in a row
 *  (as [1, 1] followed by [1, 2] followed by [2, 2]),
 * while the subset [1, 1], [0, 3], [1, 4] can not be arranged in one row.
 * NOTE that as in usual dominoes playing any pair [i, j] can also be treated as [j, i].
 *
 * @params {array} dominoes
 * @return {bool}
 *
 * @example
 *
 * [[0,1],  [1,1]] => true
 * [[1,1], [2,2], [1,5], [5,6], [6,3]] => false
 * [[1,3], [2,3], [1,4], [2,4], [1,5], [2,5]]  => true
 * [[0,0], [0,1], [1,1], [0,2], [1,2], [2,2], [0,3], [1,3], [2,3], [3,3]] => false
 *
 */
function canDominoesMakeRow(dominoes) {

  const startIndex = 0;

  let sideLeft = 0;
  let indexLeft = startIndex;
  let dominoLeft = dominoes[indexLeft];

  let sideRight = 1;
  let indexRight = startIndex;
  let dominoRight = dominoes[indexRight];


  //movement to the right
  for (let i = 0; i < dominoes.length; i++) {
    const elem = dominoes[i];
    if (!elem[0] && !elem[1]) continue;
    if (i === indexRight) continue;


    if (elem[0] === dominoRight[sideRight]) {
      elem[0] = null;
      dominoRight[sideRight] = null;

      indexRight = i;
      dominoRight = elem;
      sideRight = 1;
      i = 0;
      continue;
    }

    if (elem[1] === dominoRight[sideRight]) {
      elem[1] = null;
      dominoRight[sideRight] = null;

      indexRight = i;
      dominoRight = elem;
      sideRight = 0;
      i = 0;
      continue;
    }
  }

  //movement to the left
  for (let i = 0; i < dominoes.length; i++) {
    const elem = dominoes[i];
    if (!elem[0] && !elem[1]) continue;
    if (i === indexLeft) continue;


    if (elem[0] === dominoLeft[sideLeft]) {
      elem[0] = null;
      dominoLeft[sideLeft] = null;

      indexLeft = i;
      dominoRight = elem;
      sideLeft = 1;
      i = 0;
      continue;
    }

    if (elem[1] === dominoLeft[sideLeft]) {
      elem[1] = null;
      dominoLeft[sideLeft] = null;

      indexLeft = i;
      dominoLeft = elem;
      sideLeft = 0;
      i = 0;
      continue;
    }
  }

  return !dominoes.find(elem => elem[0] && elem[1]);
}


/**
 * Returns the string expression of the specified ordered list of integers.
 *
 * A format for expressing an ordered list of integers is to use a comma separated list of either:
 *   - individual integers
 *   - or a range of integers denoted by the starting integer separated from the end
 *     integer in the range by a dash, '-'.
 *     (The range includes all integers in the interval including both endpoints)
 *     The range syntax is to be used only for, and for every range that expands to
 *     more than two values.
 *
 * @params {array} nums
 * @return {bool}
 *
 * @example
 *
 * [ 0, 1, 2, 3, 4, 5 ]   => '0-5'
 * [ 1, 4, 5 ]            => '1,4,5'
 * [ 0, 1, 2, 5, 7, 8, 9] => '0-2,5,7-9'
 * [ 1, 2, 4, 5]          => '1,2,4,5'
 */
function extractRanges(nums) {
  let result = '';
  result += nums[0];
  for (let i = 1; i < nums.length; i++) {

    const prev = nums[i - 1];
    const curr = nums[i];
    const next = nums[i + 1];

    const diffPrev = ((curr - prev) === 1);
    const diffNext = ((next - curr) === 1);

    if (i === 1 && !diffPrev) {
      result += `,`;
    }
    if (diffPrev && !diffNext) {
      const separator = ((curr - nums[i - 2]) === 2) ? '-' : ',';
      result += `${separator}${curr}`;
      if (i !== nums.length - 1) result += `,`;
    }
    if (!diffPrev && !diffNext) {
      result += `${curr}`;
      if (i !== nums.length - 1) result += `,`;
    }
    if (!diffPrev && diffNext) {
      result += `${curr}`;
    }
  }

  return result;
}


module.exports = {
  createCompassPoints : createCompassPoints,
  expandBraces : expandBraces,
  getZigZagMatrix : getZigZagMatrix,
  canDominoesMakeRow : canDominoesMakeRow,
  extractRanges : extractRanges
};