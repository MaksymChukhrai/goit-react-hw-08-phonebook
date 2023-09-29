import React from 'react';
import StyledNavLink from '../app/App.styled'; 
import UserMenu from '../userMenu/UserMenu';



const Header = ({ isAuthenticated }) => {
  return (
    <header className="header_app">
      <nav className='nav_app'>
        <h1 className='nav_title'>Phonebook</h1>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isAuthenticated ? (
          <>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
