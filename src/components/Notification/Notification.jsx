import PropTypes from 'prop-types';
import style from './Notification.module.css';

export default function Notification ({ message }) {
	return (
		<>
			<p className={style.message}>{message}</p>
		</>
	);
};
Notification.propTypes = {
	message: PropTypes.string.isRequired
};