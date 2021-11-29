import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin: 0 auto;
  width: 70%;

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  & h2 {
    @media screen and (max-width: 500px) {
      font-size: 1rem;
    }
  }

  & text {
    font-size: 0.8rem;

    @media screen and (max-width: 500px) {
      font-size: 0.6em;
    }
  }
`;
