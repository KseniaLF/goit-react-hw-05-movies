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

export const List = styled.li({
  '&::before': {
    content: '❤',
  },
});
