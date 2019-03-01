import styled from 'styled-components'
import { getTheme } from '../..'

export const ButtonStyled = styled.button`
  display: flex;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-family: ${getTheme('fonts.primary')};
  font-size: 14px;
  color: ${getTheme('colors.sidebarButtonColor')};
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 3px;
  margin-bottom: 5px;

  &:hover,
  &.active {
    background-color: rgb(234, 236, 239);
  }
`

export const Before = styled.span`
  margin-right: 10px;
  color: ${getTheme('colors.sidebarButtonBeforeColor')};
`
