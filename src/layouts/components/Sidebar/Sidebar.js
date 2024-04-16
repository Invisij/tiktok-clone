import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import styles from './Sidebar.module.scss';
import {
    ExploreIcon,
    FollowingIcon,
    FriendIcon,
    HomeIcon,
    LiveIcon,
    ProfileIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const NAV_ITEMS = [
    {
        leftIcon: <HomeIcon />,
        title: 'For You',
    },
    {
        leftIcon: <FollowingIcon />,
        title: 'Following',
    },
    {
        leftIcon: <FriendIcon />,
        title: 'Friends',
    },
    {
        leftIcon: <ExploreIcon />,
        title: 'Explore',
    },
    {
        leftIcon: <LiveIcon />,
        title: 'LIVE',
    },
    {
        leftIcon: <ProfileIcon />,
        title: 'Profile',
    },
];

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <Menu className={cx('nav')}>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveIcon />} />
                <div className={cx('btn')}>
                    <Button red text leftIcon={<HomeIcon />}>
                        <span>For You</span>
                    </Button>
                </div>
                <div className={cx('btn')}>
                    <Button text leftIcon={<FollowingIcon />}>
                        <span>Following</span>
                    </Button>
                </div>
                <div className={cx('btn')}>
                    <Button text leftIcon={<FriendIcon />}>
                        <span>Friends</span>
                    </Button>
                </div>
                <div className={cx('btn')}>
                    <Button text leftIcon={<ExploreIcon />}>
                        <span>Explore</span>
                    </Button>
                </div>
                <div className={cx('btn')}>
                    <Button text leftIcon={<LiveIcon />}>
                        <span>LIVE</span>
                    </Button>
                </div>
                <div className={cx('btn')}>
                    <Button text leftIcon={<ProfileIcon />}>
                        <span>Profile</span>
                    </Button>
                </div>
            </Menu>
            <div className={cx('login')}>
                <span>Log in to follow creators, like videos, and view comments.</span>
                <Button outline red className={cx('login-btn')}>
                    Log In
                </Button>
            </div>
            <div className={cx('footer')}>
                <div className={cx('footer-label')}>
                    <h4>Company</h4>
                    <Button className={cx('btn')}>About</Button>
                    <Button className={cx('btn')}>Newsroom</Button>
                    <Button className={cx('btn')}>Contact</Button>
                    <Button className={cx('btn')}>careers</Button>
                </div>
                <div className={cx('footer-label')}>
                    <h4>Programs</h4>
                    <Button className={cx('btn')}>TikTok for Good</Button>
                    <Button className={cx('btn')}>Advertise</Button>
                    <Button className={cx('btn')}>TikTok LIVE Creator Networks</Button>
                    <Button className={cx('btn')}>Developers</Button>
                    <Button className={cx('btn')}>Transparency</Button>
                    <Button className={cx('btn')}>TikTok Rewards</Button>
                    <Button className={cx('btn')}>TikTok Embeds</Button>
                </div>
                <div className={cx('footer-label')}>
                    <h4>Terms & Policies</h4>
                    <Button className={cx('btn')}>Help</Button>
                    <Button className={cx('btn')}>Safety</Button>
                    <Button className={cx('btn')}>Terms</Button>
                    <Button className={cx('btn')}>Privacy Policy</Button>
                    <Button className={cx('btn')}>Privacy Center</Button>
                    <Button className={cx('btn')}>Creator Portal</Button>
                    <Button className={cx('btn')}>Community Guidelines</Button>
                </div>
                <div className={cx('footer-label')}>
                    <h4>Channels</h4>
                    <Button className={cx('btn')}>Dance</Button>
                    <Button className={cx('btn')}>Arts</Button>
                    <Button className={cx('btn')}>Food and Drink</Button>
                    <Button className={cx('btn')}>Tourism</Button>
                    <Button className={cx('btn')}>Production and Manufacturing</Button>
                    <Button className={cx('btn')}>Vehicles and Transportation</Button>
                    <Button className={cx('btn')}>Relationship</Button>
                    <Button className={cx('btn')}>TikTok Style</Button>
                    <Button className={cx('btn')}>Athletics</Button>
                    <Button className={cx('btn')}>Hobbies</Button>
                </div>
                <span className={cx('end')}>© 2024 TikTok</span>
            </div>
        </div>
    );
}

export default Sidebar;
