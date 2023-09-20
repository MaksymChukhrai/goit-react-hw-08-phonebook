import StyledNavLink from './App.styled'
import { lazy, Suspense  } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loader from '../Loader'

const HomePage = lazy(() => import('../../pages/home/HomePage'));
const RegisterPage = lazy(() => import('../../pages/register/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/login/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/contacts/ContactsPage'));

const App = () => {

  return (
    <Router>
    <div>
      <header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/register">Register</StyledNavLink>
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


export default App;
