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
  padding: 20px;

  li {
    margin-bottom: 10px;

    :before {
      content: '❤ ';
      color: orange;
      display: inline-block;
      width: 2em;
      margin-left: -1em;
    }

    a {
      text-decoration: none;
      color: #212421;
      :hover {
        color: orange;
      }
    }
  }
`;
