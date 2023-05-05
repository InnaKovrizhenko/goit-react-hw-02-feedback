import PropTypes from 'prop-types';
import { NotificationMassage } from './Notification.styled'

export const Notification = ({ message }) => {
    return <NotificationMassage>{message}</NotificationMassage>;
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}