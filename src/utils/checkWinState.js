/* eslint-disable no-else-return */
// eslint-disable-next-line consistent-return
function checkWinState(board) {
  let winState = ' ';
  if (board[0][0].value !== ' ' && board[0][0].value === board[0][1].value && board[0][1].value === board[0][2].value) {
    winState = board[0][0].value;
  }
  if (board[1][0].value !== ' ' && board[1][0].value === board[1][1].value && board[1][1].value === board[1][2].value) {
    winState = board[1][0].value;
  }
  if (board[2][0].value !== ' ' && board[2][0].value === board[2][1].value && board[2][1].value === board[2][2].value) {
    winState = board[2][0].value;
  }

  if (board[0][0].value !== ' ' && board[0][0].value === board[1][0].value && board[1][0].value === board[2][0].value) {
    winState = board[0][0].value;
  }
  if (board[0][1].value !== ' ' && board[0][1].value === board[1][1].value && board[1][1].value === board[2][1].value) {
    winState = board[0][1].value;
  }
  if (board[0][2].value !== ' ' && board[0][2].value === board[1][2].value && board[1][2].value === board[2][2].value) {
    winState = board[0][2].value;
  }

  if (board[0][0].value !== ' ' && board[0][0].value === board[1][1].value && board[1][1].value === board[2][2].value) {
    winState = board[0][0].value;
  }
  if (board[0][2].value !== ' ' && board[0][2].value === board[1][1].value && board[1][1].value === board[2][0].value) {
    winState = board[0][2].value;
  }
  if (board[0][0].revealed === true && board[0][1].revealed === true
     && board[0][2].revealed === true && board[1][0].revealed === true
     && board[1][1].revealed === true && board[1][2].revealed === true
    && board[2][0].revealed === true && board[2][1].revealed === true
    && board[2][2].revealed === true && winState === ' ') {
    winState = 'Draw';
  }
  return winState;
}

export default checkWinState;
