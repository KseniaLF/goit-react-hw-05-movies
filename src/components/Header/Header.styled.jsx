import styled from 'styled-components';

export const SearchBtn = styled.div`
  a {
    text-decoration: none;
  }

  /* button {
    display: block;

    margin: 0 auto;
    margin-bottom: 10px;
    background-color: #242124;
    border: none;
    padding: 15px 40px;
    border-radius: 20px;
    font-size: 17px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-out;

    :hover {
      background-color: orange;
      box-shadow: 0px 5px 15px orange;
    }
  } */

  div {
    max-width: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: center;

    /* background-color: #242124; */
    border: none;
    padding: 15px 35px;
    border-radius: 15px;
    font-size: 17px;
    font-weight: 500;
    /* color: #242124; */
    cursor: pointer;
    transition: all 0.3s ease-out;

    color: #fff;
    background-color: orange;
    :hover {
      box-shadow: 0px 5px 15px orange;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: orange;
  margin-bottom: 10px;
`;
