import styles from './Header.module.scss';
import clsx from 'clsx';

function Header() {
    return (
        <div className={clsx(styles.wapper)}>
            <div className={clsx(styles.inner)}></div>
        </div>
    );
}

export default Header;
