import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin: 0 auto;
  width: 75%;

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
`;

export const WrapperStyle = styled.div`
  margin-bottom: 3rem;
  @media screen and (max-width: 500px) {
    padding: 0 0.5rem;
    & tspan {
      font-size: 0.75rem;
    }
  }
`;
