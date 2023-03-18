import styled from 'styled-components';

export const SearchBtn = styled.div`
  a {
    text-decoration: none;
  }

  button {
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
      /* background-color: orange; */
      box-shadow: 0px 5px 15px orange;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: orange;
`;
