import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import * as S from './Header.styles.js';

const Header = () => {
  const [open, setOpen] = useState(true);
  const authContext = useContext(AuthContext);
  const token = authContext.token;

  const openBar = () => {
    setOpen(!open);
  };

  const logOut = () => {
    authContext.setToken('');
    Header();
  };

  return (
    <S.HeaderWrapper>
      <S.Header>
        <S.Wrapper>
          <Link to="/" id="logo">
            Road Accident System
          </Link>
          <span onClick={() => openBar(open)}>{open ? '+' : '-'}</span>
        </S.Wrapper>
        <S.HeaderRight show={open}>
          {token !== undefined ? (
            <>
              <Link to="/statistic">Statistic</Link>
              <Link to="/login" onClick={() => logOut()}>
                Log out
              </Link>
            </>
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
