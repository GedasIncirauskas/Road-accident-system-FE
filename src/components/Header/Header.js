import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Header.styles.js';

const Header = () => {
  const token = localStorage.getItem('token');

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <S.HeaderWrapper>
      <S.Header>
        <Link to="/" id="logo">
          Accident System
        </Link>
        <S.HeaderRight>
          {token !== null ? (
            <Link to="/login" onClick={() => logOut()}>
              Log out
            </Link>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Log In</Link>
            </>
          )}
          <Link to="/accident" id="active">
            Enter accident
          </Link>
        </S.HeaderRight>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
