import PropTypes from 'prop-types';
import className from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = className.bind(styles);

function PopperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default PopperWrapper;
