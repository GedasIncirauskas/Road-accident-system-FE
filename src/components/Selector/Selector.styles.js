import styled from 'styled-components';

export const FilterContainer = styled.section`
  margin: 2rem auto;
  width: calc(80% - 2rem);

  & label {
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 0.5rem;

    @media screen and (max-width: 500px) {
      font-size: 0.8rem;
    }
  }

  & select {
    padding: 0.25rem 0.5rem;
    border: 0.1rem solid rgb(81, 81, 81);
    border-radius: 0.5rem;

    @media screen and (max-width: 500px) {
      font-size: 0.8rem;
      padding: 0.1rem 0.25rem;
    }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const ClearFilterBtn = styled.button`
  background-color: rgb(250, 45, 45);
  color: rgb(255, 255, 255);
  border: none;
  padding: 0.2rem 0.8rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  line-height: 1.5rem;
  margin-top: 1rem;

  @media screen and (max-width: 500px) {
    padding: 0.1rem 0.4rem;
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
`;
