/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import createBoard from '../../utils/createBoard';
import checkWinState from '../../utils/checkWinState';
import Cell from '../Cell/Cell';
import styles from './Board.module.css';
import { Refresh } from '../../assets/svgs';

function Board() {
  const [board, setBoard] = useState(() => createBoard());
  const [player, setPlayer] = useState('X');
  const winner = checkWinState(board);

  function changePlayer() {
    if (player === 'X') {
      setPlayer('O');
    }
    if (player === 'O') {
      setPlayer('X');
    }
  }

  function handleClick(x1, y1) {
    if (!board[x1][y1].revealed && winner === ' ') {
      setBoard((prev) => prev.map((row, x2) => row.map((item, y2) => {
        if (x1 === x2 && y1 === y2) {
          return { ...item, revealed: true, value: player };
        }
        return item;
      })));
      changePlayer();
    }
  }

  function renderSwitch() {
    if (winner === 'X') {
      return <h1 className={styles.winState}>player X won</h1>;
    } if (winner === 'O') {
      return <h1 className={styles.winState}>player O won</h1>;
    } if (winner === 'Draw') {
      return <h1 className={styles.winState}>Its a draw</h1>;
    } return null;
  }

  return (
    <div className={styles.board}>
      {board.map((row, index) => (
        <div className={styles.row}>
          { row.map((item, key) => <Cell onClick={() => handleClick(index, key)} item={item} />)}
        </div>
      ))}
      {renderSwitch()}
      <button type="button" className={styles.refreshButton} onClick={() => setBoard(() => createBoard())}><Refresh /></button>
    </div>
  );
}

export default Board;
