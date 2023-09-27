import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 400;
  // padding: 15px 25px;
  // margin-right: 20px;
  // margin-top: 20px;
  // border-radius: 10px;
  // border: 1px solid rgba(0, 0, 0, 0.5);
  // background-color: darkblue;
  color: #fff;
  display: inline-block;
  text-decoration: none;

  transition: all 0.3s;

  &.active {
    // background-color: yellow;
    color: #27557a;
    // border-color: yellowgreen;
    font-weight: 700;
  }
`;

export default StyledNavLink
