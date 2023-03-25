import styled from 'styled-components';

export const MovieBlock = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const MovieImg = styled.div`
  width: 400px;
  min-width: 400px;
  margin-right: 20px;
  img {
    object-fit: cover;
  }
  @media (max-width: 700px) {
    margin-right: 0;
    min-width: 0;
  }
`;

export const MovieInfo = styled.div`
  h2 {
    color: orange;
    margin-bottom: 10px;
  }
  p {
    font-weight: 500;
    margin: 10px 0;
  }
  ul {
    /* background-color: orange; */
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* color: orange; */
    li {
      padding: 5px 10px;
      background-color: orange;
      border-radius: 5px;
    }
  }
  @media (max-width: 700px) {
    h2 {
      text-align: center;
      color: orange;
    }
  }
`;
