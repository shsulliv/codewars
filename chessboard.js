function chessBoard(rows, columns) {
  var board = [];
  var row;
  var spaces;

  for (var i = 0; i < rows; i++) {
    row = [];
    spaces = i % 2 === 0 ? ['O', 'X'] : ['X', 'O'];
    for (var j = 0; j < columns; j++) {
      row.push(j % 2 === 0 ? spaces[0] : spaces[1]);
    }
    board.push(row);
  }
  return board;
}

console.log(chessBoard(3, 4));
