import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { BackIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <BackIcon />
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>
    );
}

export default Header;
