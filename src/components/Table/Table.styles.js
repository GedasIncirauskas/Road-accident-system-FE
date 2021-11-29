import styled from 'styled-components';

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: calc(80% - 2rem);

  & td,
  th {
    border: 0.01rem solid rgb(241, 241, 241);
    padding: 0.5rem 1rem;
  }

  & tr:nth-child(even) {
    background-color: rgb(242, 242, 242);
  }

  & tr:hover {
    background-color: rgb(221, 221, 221);
  }

  & th {
    padding: 1rem 0;
    background-color: rgb(81, 81, 81);
    color: rgb(255, 255, 255);
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.6rem;
    width: 90%;
  }
`;
