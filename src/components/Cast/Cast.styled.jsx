import styled from 'styled-components';

export const CastList = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  gap: 20px;

  li {
    border-radius: 5px;
    background-color: orange;

    img {
      width: 100%;
      border-radius: 5px 5px 0 0;
    }

    div {
      padding: 10px 10px 3px 10px;
    }
  }
`;
