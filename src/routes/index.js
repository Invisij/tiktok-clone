import routesConfig from '~/config/routes';

import { HeaderOnly } from '~/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.friends, component: Friends },
    { path: routesConfig.explore, component: Explore },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
