import StyledNavLink from './App.styled'
import { lazy, Suspense ,useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loader from '../Loader'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/authReducer';
import { logoutUserThunk, refreshUserThunk } from 'redux/operations';


const HomePage = lazy(() => import('../../pages/home/HomePage'));
const RegisterPage = lazy(() => import('../../pages/register/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/login/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/contacts/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <Router>
    <div>
      <header>
        <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <StyledNavLink to="/login">Login</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
            </>
          )}
        </nav>
      </header>
      <main>
          <Suspense fallback={<Loader/>}>
          <Routes>
              <Route path ="/" element={<HomePage/>}/>
              <Route path ="/contacts" element={<ContactsPage/>}/>
              <Route path ="/login" element={<LoginPage/>}/>
              <Route path ="/register" element={<RegisterPage/>}/>
            </Routes>
          </Suspense>
      </main>
    </div>
   
    </Router>
  );

};



