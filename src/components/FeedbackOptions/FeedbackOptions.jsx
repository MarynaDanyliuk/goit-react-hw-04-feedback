import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css['button-list']}>
      {options.map(optionId => {
        return (
          <li className={css.list_item} key={optionId}>
            <button
              className={css.button}
              type="button"
              onClick={() => onLeaveFeedback(optionId)}
            >
              {optionId}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  // options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// ________________________________________________________________
// const { onHandleGood, onHandleNeutral, onHandleBad } = options;
// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   const { onHandleGood, onHandleNeutral, onHandleBad } = options;

//   return (
//     <ul className={css['button-list']}>
//       <li className={css.list_item}>
//         <button className={css.button} type="button" onClick={onHandleGood}>
//           Good
//         </button>
//       </li>
//       <li className={css.list_item}>
//         <button className={css.button} type="button" onClick={onHandleNeutral}>
//           Neutral
//         </button>
//       </li>
//       <li className={css.list_item}>
//         <button className={css.button} type="button" onClick={onHandleBad}>
//           Bad
//         </button>
//       </li>
//     </ul>
//   );
// };

// FeedbackOptions.propTypes = {
//   options: PropTypes.shape(),
//   onLeaveFeedback: PropTypes.func,
// };
