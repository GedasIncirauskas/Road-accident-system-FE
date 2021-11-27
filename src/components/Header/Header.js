import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import * as S from './Header.styles.js';

const Header = () => {
  const authContext = useContext(AuthContext);
  const token = authContext.token;

  const logOut = () => {
    authContext.setToken('');
    Header();
  };

  return (
    <S.HeaderWrapper>
      {console.log('ka grazina', authContext)}
      <S.Header>
        <Link to="/" id="logo">
          Road Accident System
        </Link>
        <S.HeaderRight>
          {token !== undefined ? (
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
