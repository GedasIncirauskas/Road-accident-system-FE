import styled from 'styled-components';

export const ModalBtn = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgb(250, 45, 45);
  color: rgb(255, 255, 255);
  border: none;
  z-index: 999;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  line-height: 1.5rem;
  font-family: 'Manrope', sans-serif;

  &::after {
    content: ' +';
    margin-left: 0.5rem;
    font-weight: bold;
  }

  @media screen and (max-width: 500px) {
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
  }
`;
