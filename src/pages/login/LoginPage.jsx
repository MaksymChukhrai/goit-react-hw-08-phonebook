import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthentificated } from 'redux/authReducer';
import { loginUserThunk } from 'redux/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
const authentificated = useSelector(selectAuthentificated);


  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };

  if (authentificated) return <Navigate to="/contacts"/>;
  return (
    <div className='section_login'>
      <h1 className='title_login'>Login Into Your Account</h1>
      <form className="form_login" onSubmit={handleSubmit}>
        <label className="title_form_login">
          <p>Email:</p>
          <input name="userEmail" type="email" required />
        </label>
        <br />
        <label className="title_form_login">
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button className="btn_login" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;