import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  border-radius: 4px;
  &.active {
    background-color: orange;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
