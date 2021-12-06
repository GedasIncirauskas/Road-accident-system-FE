import styled from 'styled-components';

export const FormContainer = styled.div`
  padding: 1.5rem 2rem;
  background-color: #fff;
  border: 0.2rem solid grey;
  border-radius: 2rem;
  margin: 2rem auto 4rem auto;
  width: 30%;

  @media screen and (max-width: 500px) {
    margin: 1rem auto 4rem auto;
    padding: 0.5rem 1rem;
    width: 70%;

    & h2 {
      margin: 0.5rem auto 0 auto;
    }
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin: 0.2rem 0 1rem 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  box-sizing: border-box;
  line-height: 1.5rem;
  &:focus {
    background-color: #ddd;
    outline: none;
  }

  @media screen and (max-width: 500px) {
    padding: 0.5rem;
    margin: 0 0 1rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin: 0;
`;

export const ButtonStyle = styled.button`
  background-color: #04aa6d;
  border-radius: 0.5rem;
  color: #fff;
  padding: 0.6rem 0.8rem;
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

  @media screen and (max-width: 500px) {
    padding: 0.4rem 0.6rem;
    font-size: 1rem;
    width: 100%;
  }
`;

export const SignIn = styled.div`
  text-align: center;
  margin-top: 1rem;

  @media screen and (max-width: 500px) {
    font-size: 0.75rem;
  }

  a {
    color: dodgerblue;
    padding: 0.5rem 0;

    @media screen and (max-width: 500px) {
      font-size: 0.75rem;
    }
  }
`;
