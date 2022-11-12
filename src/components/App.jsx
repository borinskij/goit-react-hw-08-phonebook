// import Authorization from 'pages/Authorization/Authorization';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';
// import Registration from 'pages/Registration/Registration';
// import Home from 'pages/Home/Home';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCurrent } from 'redux/auth/auth-operation';
import Layout from './Layout/Layout';
import NotFound from './NotFound/NotFound';
import PrivatRouts from './PrivatRouts/PrivatRouts';
import PublicRouts from './PublicRouts/PublicRouts';
const Authorization = lazy(() => import('pages/Authorization/Authorization'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const Registration = lazy(() => import('pages/Registration/Registration'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<PublicRouts />}>
              <Route path="/registration" element={<Registration />} />
              <Route path="/authorization" element={<Authorization />} />
            </Route>
            <Route path="/" element={<PrivatRouts />}>
              <Route path="/contactsPage" element={<ContactsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
