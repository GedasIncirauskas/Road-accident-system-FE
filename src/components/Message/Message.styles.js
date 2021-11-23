import styled from 'styled-components';

export const MessageContainer = styled.div`
  padding: 0.5rem;
  margin: 0.5rem auto;
  color: rgb(255, 255, 255);
  background: rgb(250, 45, 45);
  border: none;
  border-radius: 0.2rem;
  line-height: 1.5rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    padding: 0.2rem 0;
  }
`;
