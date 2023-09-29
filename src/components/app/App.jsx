
import { lazy, Suspense ,useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Loader from '../Loader/Loader'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import {  refreshUserThunk } from 'redux/operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Header from '../HeaderNav/HeaderNav';

const HomePage = lazy(() => import('../../pages/home/HomePage'));
const RegisterPage = lazy(() => import('../../pages/register/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/login/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/contacts/ContactsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  return (
    <>
      <div>
        <Header isAuthenticated={authentificated} /> {/* Передайте isAuthenticated как проп в Header */}
        <main>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<div>Not found</div>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
};