import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, selectUserEmail } from 'redux/authReducer'; // Добавьте selectUserEmail
import { logoutUserThunk } from 'redux/operations';

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const userEmail = useSelector(selectUserEmail); // Используйте userEmail
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      {userData && (
        <>
          <p className='usermail'>Hello, {userEmail}!</p> {/* Отображаем адрес электронной почты */}
          <button className='logout_btn_usermenu'onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
