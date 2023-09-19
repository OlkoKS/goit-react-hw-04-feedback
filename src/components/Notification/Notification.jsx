import PropTypes from 'prop-types';
import { MessageElement } from './Notification.styled';

export const Notification = ({ message }) => {
    return (
        <div className="notificationMessage">
            <MessageElement>{message}</MessageElement>
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
}