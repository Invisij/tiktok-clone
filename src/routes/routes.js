import config from '~/config';

// layouts
import { HeaderOnly } from '~/layouts';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

const publicRoutes = [
    { path: '/', component: Home },
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.friends, component: Friends },
    { path: config.routes.live, component: Live },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
