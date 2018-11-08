function getRectangleString(width, height) {
  let result = '';

  for (let row = 1; row <= height; row++) {

    switch (row) {
    case 1:

      for (let col = 1; col <= width; col++) {
        switch (col) {
        case 1:
          result = result + '┌';
          break;
        case width:
          result = result + '┐\n';
          break;
        default:
          result = result + '─';
          break;

        }
      }

      break;

    case height:

      for (let col = 1; col <= width; col++) {
        switch (col) {
        case 1:

          result = result + '└';
          break;
        case width:
          result = result + '┘\n';
          break;
        default:
          result = result + '─';
          break;
        }
      }
      break;

    default:

      for (let col = 1; col <= width; col++) {
        switch (col) {
        case 1:
          result = result + '│';
          break;
        case width:
          result = result + '│\n';
          break;
        default:
          result = result + ' ';
          break;
        }
      }
      break;

    }

  }

  return result;
}


function getRectangleString2(width, height){
  let result='';
  for (let row = 0; row < height; row++) {
      
    if (row===0){
      result+=`┌${'─'.repeat(width-2)}┐\n`;
      continue;
    };
    if (row===height-1){
      result+=`└${'─'.repeat(width-2)}┘\n`;
      continue;
    };
    result+=`│${' '.repeat(width-2)}│\n`;
  }
  return result;
}

console.log(getRectangleString2(6,4))