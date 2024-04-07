import styles from './Sidebar.module.scss';
import clsx from 'clsx';

function Sidebar() {
    return (
        <div className={clsx([styles.wrapper])}>
            <h2>Sidebar</h2>
        </div>
    );
}

export default Sidebar;
