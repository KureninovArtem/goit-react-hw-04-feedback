import PropTypes from 'prop-types';
import style from './Section.module.css';

export default function Section ({ title, children }) {
	return (
		<>
			<h2 className={style.title}>{title}</h2>
			{children}
		</>
	);
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};