import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={css.statistics}>
        <li className={css.stat_item}>Good: {good}</li>
        <li className={css.stat_item}>Neutral: {neutral}</li>
        <li className={css.stat_item}>Bad: {bad}</li>
        <li className={css.stat_item}>Total: {total}</li>
        <li className={css.stat_item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
