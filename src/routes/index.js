import { HeaderOnly } from '~/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Friends from '~/pages/Friends';
import Explore from '~/pages/Explore';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/friends', component: Friends },
    { path: '/explore', component: Explore },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
