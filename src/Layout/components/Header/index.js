import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import AccoutItem from '~/components/AccountItem';
import PopperWrapper from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import Image from '~/components/Image';
import {
    CloseIcon,
    FavoriteIcon,
    FeedbackIcon,
    GetCoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveHubIcon,
    LiveIcon,
    LoadingIcon,
    LogoIcon,
    LogoutIcon,
    MenuIcon,
    MessageIcon,
    ProfileIcon,
    SearchIcon,
    SettingIcon,
    ThemeIcon,
    UploadIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        leftIcon: <LiveHubIcon />,
        title: 'LIVE Creator Hub',
        to: './live',
    },
    {
        leftIcon: <LanguageIcon />,
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
        leftIcon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        leftIcon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        leftIcon: <ThemeIcon />,
        title: 'Dark mode',
    },
];

const USER_ITEM = [
    {
        leftIcon: <ProfileIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        leftIcon: <FavoriteIcon />,
        title: 'Favorites',
        to: '/favorites',
    },
    {
        leftIcon: <GetCoinIcon />,
        title: 'GetCoins',
        to: '/getcoins',
    },
    {
        leftIcon: <LiveIcon />,
        title: 'LIVE Studio',
        to: '/livestudio',
    },
    {
        leftIcon: <SettingIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        leftIcon: <LogoutIcon />,
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
                    <LogoIcon />
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
                            <CloseIcon />
                        </button>
                        <LoadingIcon className={cx('loading')} />
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    <Button outline leftIcon={<UploadIcon />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <Button text>
                                    <MessageIcon />
                                </Button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <Button text>
                                    <InboxIcon />
                                </Button>
                            </Tippy>
                            <Menu items={USER_ITEM} onChange={handleMenuChange}>
                                <Button text>
                                    <Image
                                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0450b6fa39c44cd5aac6fda394e23c07~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713020400&x-signature=WgOE50qkN75UrmqXpmgjHKHksco%3D"
                                        className={cx('user-avatar')}
                                        alt="Sky"
                                    />
                                </Button>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                            <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                                <Button text>
                                    <MenuIcon />
                                </Button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
