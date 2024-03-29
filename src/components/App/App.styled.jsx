import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 960px; */
  max-width: 1300px;
  margin: 0 auto;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 0;
    margin-bottom: 16px;
    border-bottom: 2px solid black;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  :hover {
    color: orange;
  }

  &.active {
    color: white;
    background-color: orange;
  }
`;
