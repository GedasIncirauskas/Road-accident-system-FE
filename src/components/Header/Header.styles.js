import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  height: 5rem;

  @media screen and (max-width: 500px) {
    height: auto;
  }
`;

export const Header = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  width: 80%;

  & #logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  a {
    float: left;
    color: black;
    text-align: center;
    padding: 0.6rem;
    text-decoration: none;
    font-size: 1rem;
    line-height: 1.5rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: #ddd;
      color: black;
    }

    &#active {
      margin: 0 1rem;
      background-color: rgb(250, 45, 45);
      color: white;
      font-weight: bolder;

      @media screen and (max-width: 500px) {
        margin: 0;
        width: 50%;
        padding: 0.2rem 0.4rem;
      }
    }

    @media screen and (max-width: 500px) {
      margin: 0;
      width: 100%;
      padding: 0.2rem 0;
    }
  }

  @media screen and (max-width: 500px) {
    & a {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;

export const HeaderRight = styled.div`
  float: right;

  @media screen and (max-width: 500px) {
    float: none;
    display: none;
  }
`;
