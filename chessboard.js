function chessboard(val) {
  let chessboard = "";
  let size = val;
  let row = 1;
  while (row <= size) {
    let column = 1;
    while (column <= size) {
      if ((row + column) % 2 === 0) {
        chessboard += " ";
      } else if ((row + column) % 2 === 1) {
        chessboard += "#";
      }
      column += 1;
    }
    chessboard += "\n";
    row += 1;
  }
  return chessboard;
}