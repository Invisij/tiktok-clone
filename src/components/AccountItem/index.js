import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/67c8523a196569babc59d9a898d8fd85~c5_300x300.webp?lk3s=a5d48078&x-expires=1712761200&x-signature=8%2B2LFnsYziMuYmdBvQc9iThdFSQ%3D"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>linhbarbie</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('name')}>✨Linh✨</span>
            </div>
        </div>
    );
}

export default AccoutItem;
