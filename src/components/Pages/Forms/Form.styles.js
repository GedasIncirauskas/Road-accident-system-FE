import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1.5rem 2rem;
  background-color: #fff;
  border: 0.2rem solid grey;
  border-radius: 2rem;
  margin: 4rem auto;
  width: 30%;
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 15px;
  margin: 0.2rem 0 1.5rem 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  box-sizing: border-box;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const ButtonStyle = styled.button`
  background-color: #04aa6d;
  border-radius: 0.5rem;
  color: #fff;
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 1.2rem;
  width: 50%;
  letter-spacing: 0.05rem;

  &:hover {
    opacity: 1;
  }
`;

export const SignIn = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    color: dodgerblue;
  }
`;
