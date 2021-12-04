import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width: 50%;
  z-index: 999;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 10%;
  background-color: rgb(250, 45, 45);
  color: rgb(255, 255, 255);
  border: none;
  z-index: 999;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  line-height: 1.5rem;
  text-align: center;
  opacity: 0.7;

  @media screen and (max-width: 500px) {
    width: 80%;
    left: 5%;
    right: 5%;
    top: 15%;
    font-size: 0.8rem;
  }
`;
