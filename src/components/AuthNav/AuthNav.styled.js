import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    background-color: orange;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
