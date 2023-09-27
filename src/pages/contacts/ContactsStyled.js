import { Button } from 'antd';
import styled from 'styled-components';

export const StyledSubmitBtn = styled(Button)`
cursor: pointer;
background-color: #3f98f1;
color: #ffff;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
border-radius: 5px;
border-color: transparent;
font-family: inherit;
font-weight: 500;
font-size: 20px;
line-height: 1.88;
text-align: center;
letter-spacing: 0.04em;
padding: 16px 32px;
margin-top: 35px;
width: 205px;
/* height: 70px; */
  &:hover {
    background: #466b89;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;