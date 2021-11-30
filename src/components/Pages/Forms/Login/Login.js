import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Message, Api } from '../../../';
import { AuthContext } from '../../../../contexts/auth';
import * as S from '../Form.styles';

const LogIn = () => {
  const [inputValue, setInputValue] = useState();
  const [toggleError, setToggleError] = useState(false);
  const [msg, setMsg] = useState();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const getLogin = async (e) => {
    e.preventDefault();
    if (!inputValue) {
      setToggleError(!toggleError);
      return setMsg('Please enter email and password');
    }
    try {
      const response = await Api.getLogin(inputValue);
      const data = await response.json();
      if (response.status !== 200) {
        setToggleError(!toggleError);
        return setMsg(data.err);
      }
      authContext.setToken(data.token);
      return navigate('/');
    } catch (err) {
      setToggleError(!toggleError);
      setMsg(err);
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
        />
        {toggleError ? <Message>{msg}</Message> : ''}
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
