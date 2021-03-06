import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
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
          <Link to="/" id="logo" onClick={() => openBar(open)}>
            Road Accident System
          </Link>
          <span onClick={() => openBar(open)}>{open ? '+' : '-'}</span>
        </S.Wrapper>
        <S.HeaderRight show={open}>
          {token !== undefined ? (
            <>
              <Link to="/statistic" onClick={() => openBar(open)}>
                Statistic
              </Link>
              <Link to="/" onClick={() => logOut()}>
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" onClick={() => openBar(open)}>
                {' '}
                Register
              </Link>
              <Link to="/login" onClick={() => openBar(open)}>
                Log In
              </Link>
            </>
          )}
          <Link to="/accident" id="active" onClick={() => openBar(open)}>
            Enter accident
          </Link>
        </S.HeaderRight>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
