import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk } from 'redux/operations';
import { selectAuthentificated } from 'redux/authReducer';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };
  if (authentificated) return <Navigate to="/contacts" />;
  return (
    <div className="section_register">
      <h1 className="title_register">Register your account</h1>
      <form className="form_register" onSubmit={handleSubmit}>
        <label className="title_form_register">
          <p>Name:</p>
          <input name="userName" type="text" required minLength={2} />
        </label>
        <br />
        <label className="title_form_register">
          <p>Email:</p>
          <input name="userEmail" type="email" required />
        </label>
        <br />
        <label className="title_form_register">
          <p>Password:</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <br />
        <button className="btn_register" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
