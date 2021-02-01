function createBoard() {
  // create board
  const array = new Array(3);
  for (let i = 0; i < array.length; i += 1) {
    array[i] = new Array(3);
  }

  // initialize fields
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      array[i][j] = {
        value: ' ',
        revealed: false,
      };
    }
  }

  return array;
}

export default createBoard;
