import React, { useState } from 'react';
import { Message } from '../../../';
import * as S from '../Form.styles';

const LogIn = () => {
  const [inputValue, setInputValue] = useState();
  const [toggleError, setToggleError] = useState(false);
  const [msg, setMsg] = useState();

  const getLogin = (e) => {
    e.preventDefault();
    if (inputValue) {
      fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValue),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.err) {
            setToggleError(!toggleError);
            return setMsg(data.err);
          }
          localStorage.setItem('token', `${data.token}`);
          window.location.href = '/accident';
          return alert(data.msg);
        })
        .catch((err) => alert(err));
    } else {
      setToggleError(!toggleError);
      return setMsg('Please enter email and password');
    }
  };

  return (
    <form>
      <S.FormContainer>
        <h2>Log In</h2>
        <p>Please enter account data.</p>
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <S.InputStyle
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
          onClick={() => setToggleError(false)}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <S.InputStyle
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
          onClick={() => setToggleError(false)}
          required
        />
        {toggleError ? <Message color={'false'}>{msg}</Message> : ''}
        <S.ButtonWrapper>
          <S.ButtonStyle type="submit" onClick={(e) => getLogin(e)}>
            Login
          </S.ButtonStyle>
        </S.ButtonWrapper>
        <S.SignIn>
          Don't have an account? <a href="/register">Create account</a>.
        </S.SignIn>
      </S.FormContainer>
    </form>
  );
};

export default LogIn;
