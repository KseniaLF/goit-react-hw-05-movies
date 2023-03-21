import styled from 'styled-components';

// export const List = styled.ul`
//   li {
//     :before {
//       //   content: '•'; /* Unicode-символ маркерной точки */
//       content: '❤ ';
//       color: orange;
//       display: inline-block;
//       width: 1em;
//       /* margin-left: -1em; */
//     }
//   }
// `;

// export const List = styled.li({
//   '&::before': {
//     content: '❤',
//   },
// });

export const List = styled.ul`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  gap: 20px;

  li {
    :hover {
      box-shadow: 0 0 10px orange;
    }

    /* padding: 20px; */
    /* border: 2px solid orange; */
    border-radius: 5px;
    /* margin-bottom: 10px; */

    /* :before {
      content: '❤ ';
      color: orange;
      display: inline-block;
      width: 2em;
      margin-left: -1em;
    } */

    a {
      text-decoration: none;
      color: #212421;

      :hover {
        color: orange;
      }
    }
    img {
      border-radius: 5px 5px 0 0;
    }

    p {
      padding: 10px;
    }
  }
`;
