import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button
            to={data.to}
            className={cx('menu-item', { separate: data.separate })}
            leftIcon={data.leftIcon}
            rightIcon={data.rightIcon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
