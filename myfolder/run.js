function findStringInSnakingPuzzle(puzzle, searchStr) {
    const puzzleArray=puzzle.map(elem=>{
        return elem.split('');
    });


    for (let i=0;i<puzzleArray.length;i++){
        for (let j=0;j<puzzleArray[0].length;j++){
            const workArray=[].concat(puzzleArray);
            const columns=workArray[0].length-1;
            const rows=workArray.length-1;

            let m=0;

            let row=i;
            let col=j;

            if (workArray[i][j]!==searchStr[m]) continue;
            workArray[row][col]=null;
            m++;

            while (m!==searchStr.length){

                if (row-1>=0) {
                    if (workArray[row-1][col]===searchStr[m]) {
                      row=row-1;
                      workArray[row][col]=null;
                      m++;
                      continue;
                    }
                }

                if (col-1>=0) {
                    if (workArray[row][col - 1] === searchStr[m]) {
                      col = col - 1;
                      workArray[row][col] = null;
                      m++;
                      continue;
                    }
                }

                if (col+1<=columns) {
                    if (workArray[row][col + 1] === searchStr[m]) {
                      col = col + 1;
                      workArray[row][col] = null;
                      m++;
                      continue;
                    }
                }

                if (row+1<=rows) {
                    if (workArray[row + 1][col] === searchStr[m]) {
                      row = row + 1;
                      workArray[row][col] = null;
                      m++;
                      continue;
                    }
                }

                break;
            }

            if (m===searchStr.length) return true;

        }
    }

    return false;

}

const puzzle = [
  'ANGULAR',
  'REDNCAE',
  'RFIDTCL',
  'AGNEGSA',
  'YTIRTSP'
];

const words=[
  'ANGULAR', 'REACT', 'UNDEFINED', 'RED', 'STRING', 'CLASS', 'ARRAY'
]

console.log(findStringInSnakingPuzzle(puzzle,words[2]));

