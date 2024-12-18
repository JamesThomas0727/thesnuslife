import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home/home';
import ShopPage from './pages/shop/shop';
import ApparelPage from './pages/apparel/apparel';
import AccessoriesPage from './pages/accessories/accessories';
import WholesalePage from './pages/wholesale/wholesale';
import AboutUsPage from './pages/aboutus/aboutus';
import FAQsPage from './pages/faqs/faqs';
import CartPage from './pages/buynow/buynow';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BuyPage from './pages/buynow/buynow';
export default function Content() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/home'
            element={<HomePage />}
          />
          <Route
            path='*'
            element={<HomePage />}
          />
          <Route
            path='/shop'
            element={<ShopPage />}
          />
          <Route
            path='/faqs'
            element={<FAQsPage />}
          />
          <Route
            path='/apparel'
            element={<ApparelPage />}
          />
          <Route
            path='/accessories'
            element={<AccessoriesPage />}
          />
          <Route
            path='/wholesale'
            element={<WholesalePage />}
          />
          <Route
            path='/faqs'
            element={<FAQsPage />}
          />
          <Route
            path='/aboutus'
            element={<AboutUsPage />}
          />
          <Route
            path='/payment'
            element={<AboutUsPage />}
          />
          <Route
            path='/cart'
            element={<CartPage />}
          />
          <Route
            path='/buynow'
            element={<BuyPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

