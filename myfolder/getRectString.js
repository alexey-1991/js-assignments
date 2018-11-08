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