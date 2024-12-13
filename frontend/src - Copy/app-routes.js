import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import FAQsPage from './pages/faqs/faqs';
// import AboutUsPage from './pages/aboutus/aboutus';
import WholesalePage from './pages/wholesale/wholesale';

import { withNavigationWatcher } from './context/navigation';

const routes = [
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/shop',
        element: ShopPage
    },
    {
        path: '/faqs',
        element: FAQsPage
    },
    {
        path: '/aboutus',
        element: HomePage
    },
    {
        path: '/wholesale',
        element: WholesalePage
    },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
    // {
    //     path: '/home',
    //     element: HomePage
    // },
];

export default routes;
// export default routes.map(route => {
//     return {
//         ...route,
//         element: withNavigationWatcher(route.element, route.path)
//     };
// });
