/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cell.module.css';
import { Circle, Cross } from '../../assets/svgs';

// eslint-disable-next-line react/prop-types
function Cell({ item, onClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={styles.cell} onClick={onClick}>
      {item.value === 'X' ? <Cross /> : item.value === 'O' ? <Circle /> : ' ' }
    </div>
  );
}

Cell.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
    revealed: PropTypes.bool,
  }),
};

export default Cell;
