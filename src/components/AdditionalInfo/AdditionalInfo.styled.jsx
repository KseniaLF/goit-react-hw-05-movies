import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AddInfoBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
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
