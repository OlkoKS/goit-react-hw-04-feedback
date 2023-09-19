import PropTypes from 'prop-types';
import { ListContainer, ListElement } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ListContainer className="statisticsList">
            <ListElement>good: {good}</ListElement>
            <ListElement>neutral: {neutral}</ListElement>
            <ListElement>bad: {bad}</ListElement>
            <ListElement>total: {total}</ListElement>
            <ListElement>positivePercentage: {positivePercentage}%</ListElement>
        </ListContainer>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}