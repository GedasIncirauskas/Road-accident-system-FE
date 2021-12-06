import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: rgb(241, 241, 241);
  width: 100%;
  height: 5rem;
  z-index: 999;

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

    @media screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
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
        margin: 0 auto;
        background-color: rgb(241, 241, 241);
        color: rgb(0, 0, 0);
      }
    }

    @media screen and (max-width: 500px) {
      margin: 0;
      width: 100%;
      padding: 0.2rem 0.4rem;
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

export const Wrapper = styled.div`
  & span {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    & span {
      display: block;
      line-height: 2rem;
      font-weight: bold;
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }
`;

export const HeaderRight = styled.div`
  float: right;

  @media screen and (max-width: 500px) {
    float: none;
    display: ${(props) => (props.show ? 'none' : 'block')};
  }
`;
