import PropTypes from 'prop-types';
import { StatisticsEl } from './Statistics.styled'

export const Statistics = (
    {
        good,
        neutral,
        bad,
        total,
        positivePersentage,
    }
) => {
    return (
        <StatisticsEl>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePersentage}%</p>
        </StatisticsEl>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePersentage: PropTypes.string.isRequired,
}