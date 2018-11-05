function* getFigureRectangles(figure) {

    const array=figure.split('\n').slice(0,-1);
    const tipCordinates=[];
    let currentWidth;
    let currentHeight;

    
    //get tip Coordinates
    for (let row=0;row<array.length;row++){
        for (let col=0;col<array[0].length;col++){
            if (array[row][col]==='+'){
                const coord={row:row,col:col}
                tipCordinates.push(coord);
            }
        }
    }
    
    // revise tips:
    for (let num=0;num<tipCordinates.length;num++){
        const tip=tipCordinates[num];
        
        
        
        if (tip.col+1>=array[0].length || 
            tip.row===array.length-1) continue;
           
        let row=tip.row;
        let col=tip.col+1;
        let side=1;//1-top; 2-right; 3-bottom; 4-left

        while (row!==tip.row || col!==tip.col){
            if (!array[row] || !array[0][col]) {
                col=tip.col;
                row=tip.row;
                continue;
            }
            switch (side){
                case 1:
                    if (array[row][col]==="-"){
                        col++;
                        continue;
                    } 
                    if (array[row][col]==="+"){
                        
                        if (array[row+1][col]==="|" || 
                            array[row+1][col]==="+"){
                            side++;
                            row++;

                            currentWidth=col-tip.col+1;

                            continue;   
                        } else {
                            col++;
                            continue;
                        }
                    } 
                    col=tip.col;
                    row=tip.row;
                    continue;
                case 2:
                    if (array[row][col]==="|"){
                        row++;
                        continue;
                    } 
                    if (array[row][col]==="+" ){
                        
                        if (array[row][col-1]==="-" ||
                            array[row][col-1]==="+"){
                            side++;
                            col--;

                            currentHeight=row-tip.row+1;

                            continue;
                        } else {
                            row++;
                            continue;
                        } 
                    }
                    col=tip.col;
                    row=tip.row;
                    continue;
                case 3:
                    if (array[row][col]==="-"){
                        col--;
                        continue;
                    } 
                    if (array[row][col]==="+" ){
                        
                        if (array[row-1][col]==="|" ||
                            array[row-1][col]==="+"){
                            side++;
                            row--;

                            if (row===tip.row ){  
                                if (col===tip.col){
                                    const square=renderSquare(currentWidth,currentHeight);
                                    yield square;
                                } else {
                                    col=tip.col;
                                    row=tip.row;
                                } 
                            }

                            continue;
                        } else {
                            col--;
                            continue;
                        }      
                    } 
                    col=tip.col;
                    row=tip.row;
                    continue;
                case 4:
                    if (array[row][col]==="|"){
                        row--;
                        if (row===tip.row ){  
                            if (col===tip.col){
                                const square=renderSquare(currentWidth,currentHeight);
                                yield square;
                            } else {
                                col=tip.col;
                                row=tip.row;
                            } 
                        }
                        continue;
                    } 
                    col=tip.col;
                    row=tip.row;
                    continue;
                default:
                    break;
            }
        } 

    }

}

const regV=/\|([ ]*)(?=\|)|\+([-]*)(?=\+)/g
const regH=/\+([-]*)(?=\+)/g

const figure=   '+------------+\n'+
                '|            |\n'+
                '|            |\n'+
                '|            |\n'+
                '+------+-----+\n'+
                '|      |     |\n'+
                '|      |     |\n'+
                '+------+-----+\n'

const figure2=  '   +-----+     \n'+ 
                '   |     |     \n'+ 
                '+--+-----+----+\n'+
                '|             |\n'+
                '|             |\n'+
                '+-------------+\n'   
                
const figure3=  '   +--+   \n' +
                '   |  |   \n' +
                '+--+--+--+\n' +
                '|     |  |\n' +
                '+--+--+--+\n' +
                '   |  |   \n' +
                '   +--+   \n';

const figure4=  "++++\n"+
                "++++\n";
                





for (let block of getFigureRectangles(figure4)){
    console.log(block)
}


function renderSquare(width,height){
    const arr=new Array(height);


    for (let row=0;row<height;row++){
        const newRow=new Array(width);
            arr[row]=newRow;

        for (let col=0;col<width;col++){
            

            if ((row===0 && col===0) ||
                (row===0 && col===width-1) ||
                (row===height-1 && col===0) ||
                (row===height-1 && col===width-1)      ){
                arr[row][col]='+';
                continue;
            }

            if ((row===0 && col>0 && col<width-1) ||
                (row===height-1 && col>0 && col<width-1)){
                arr[row][col]='-';
                continue;
            }

            if ((col===0 && row>0 && row<height-1) ||
                (col===width-1 && row>0 && row<height-1)){
                arr[row][col]='|';
                continue;
            }

            arr[row][col]=' ';

        }
        arr[row]=arr[row].join('');
    }

    return arr.join("\n")+"\n";
}

