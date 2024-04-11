import {
    faArrowRightFromBracket,
    faBookmark,
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEllipsisVertical,
    faGear,
    faInbox,
    faKeyboard,
    faLanguage,
    faLightbulb,
    faMagnifyingGlass,
    faMoon,
    faPaperPlane,
    faPlus,
    faSpinner,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import PopperWrapper from '~/components/Popper';
import images from '~/assets/images';
import styles from './Header.module.scss';
import AccoutItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        leftIcon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'LIVE Creator Hub',
        to: './live',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'English',
                    code: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    code: 'vi',
                },
            ],
        },
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
];

const USER_ITEM = [
    {
        leftIcon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorites',
        to: '/favorites',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCoins} />,
        title: 'GetCoins',
        to: '/getcoins',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faVideo} />,
        title: 'LIVE Studio',
        to: '/livestudio',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([]);
    //     }, 2000);
    // }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accouts</h4>
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faInbox} />
                                </button>
                            </Tippy>
                            <Menu items={USER_ITEM} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <img
                                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0450b6fa39c44cd5aac6fda394e23c07~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713020400&x-signature=WgOE50qkN75UrmqXpmgjHKHksco%3D"
                                        className={cx('user-avatar')}
                                        alt="Sky"
                                    />
                                </button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
