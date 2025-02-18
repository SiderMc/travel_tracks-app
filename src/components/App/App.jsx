import 'modern-normalize';

import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Layout = lazy(() => import('../Layout/Layout'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Details = lazy(() => import('../../pages/Details/Details'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const Features = lazy(() => import('../Features/Features'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="details/:id" element={<Details />}>
            <Route index element={<Features />} />
            <Route path='features' element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}
