import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Message } from '../../..';
import * as S from '../Form.styles';

const Register = () => {
  const [inputValue, setInputValue] = useState();
  const [toggleError, setToggleError] = useState(false);
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const getRegistration = (e) => {
    e.preventDefault();

    if (inputValue && inputValue.password === inputValue.repeatPassword) {
      fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: inputValue.email,
          password: inputValue.password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.serverStatus !== 2) {
            setToggleError(!toggleError);
            return setMsg('Invalid email or password');
          }
          return navigate('/login', { replace: true });
        })
        .catch((err) => alert(err));
    } else {
      setToggleError(!toggleError);
      return setMsg('Please enter correct email and password');
    }
  };

  return (
    <form>
      <S.FormContainer>
        <h2>Register</h2>
        <p>Please fill in this form to create an account.</p>
        <label>
          <b>Email</b>
        </label>
        <S.InputStyle
          type="text"
          placeholder="Enter Email"
          autoComplete="off"
          onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
          onClick={() => setToggleError(false)}
        />
        <label>
          <b>Password</b>
        </label>
        <S.InputStyle
          type="password"
          placeholder="Enter Password"
          autoComplete="off"
          onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
          onClick={() => setToggleError(false)}
        />
        <label>
          <b>Repeat Password</b>
        </label>
        <S.InputStyle
          type="password"
          placeholder="Repeat Password"
          autoComplete="off"
          onChange={(e) => setInputValue({ ...inputValue, repeatPassword: e.target.value })}
          onClick={() => setToggleError(false)}
        />
        {toggleError ? <Message>{msg}</Message> : ''}
        <S.ButtonWrapper>
          <S.ButtonStyle type="submit" onClick={(e) => getRegistration(e)}>
            Register
          </S.ButtonStyle>
        </S.ButtonWrapper>
        <S.SignIn>
          Already have an account? <Link to="/login">Sign in</Link>.
        </S.SignIn>
      </S.FormContainer>
    </form>
  );
};

export default Register;
