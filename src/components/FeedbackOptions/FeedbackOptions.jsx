import PropTypes from 'prop-types';
import {
  BtnContainer,
  BtnElement,
} from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnContainer>
      {options.map(option => {
        return (
          <BtnElement
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </BtnElement>
        );
      })}
    </BtnContainer>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
