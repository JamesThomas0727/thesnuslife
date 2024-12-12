import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import appInfo from './app-info';
import routes from './app-routes';
import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import ApparelPage from './pages/apparel/apparel';
import AccessoriesPage from './pages/accessories/accessories';
import WholesalePage from './pages/wholesale/wholesale';
import AboutUsPage from './pages/aboutus/aboutus';
import FAQsPage from './pages/faqs/faqs';

import LoadingPanel from './components/loadingpanel/LoadingPanel';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// import { SideNavOuterToolbar as SideNavBarLayout } from './layouts';
export default function Content() {
  return (
    // <SideNavBarLayout title={appInfo.title}>
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))} */}
          <Route
            path='/home'
            element={<HomePage></HomePage>}
          />
          <Route
            path='*'
            element={<HomePage></HomePage>}
          />
          <Route
            path='/shop'
            element={<ShopPage></ShopPage>}
          />
          <Route
            path='/faqs'
            element={<FAQsPage></FAQsPage>}
          />
          <Route
            path='/apparel'
            element={<ApparelPage></ApparelPage>}
          />
          <Route
            path='/accessories'
            element={<AccessoriesPage></AccessoriesPage>}
          />
          <Route
            path='/wholesale'
            element={<WholesalePage></WholesalePage>}
          />
          <Route
            path='/faqs'
            element={<FAQsPage></FAQsPage>}
          />
          <Route
            path='/aboutus'
            element={<AboutUsPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

