import { Button, Buttons } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
return (
    <Buttons>
       {options.map((el) => {
            return (<Button key={el} onClick={() => onLeaveFeedback(el)}><span>{el}</span></Button>);
        })
       }   
    </Buttons>
)
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}