import PropTypes from 'prop-types';
import { Container, TitleElement } from './Section.styled';

export const Section = ({ title, children }) => {
    return (
        <Container>
            <TitleElement>{title}</TitleElement>
            {children}
        </Container>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}
