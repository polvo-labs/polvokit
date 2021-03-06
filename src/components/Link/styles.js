import styled from 'styled-components'
import { prop } from 'styled-tools'
import { darken } from 'polished'
import { getTheme } from '../..'

export const LinkStyled = styled.a`
  display: inline-flex;
  color: ${p => getTheme(`colors.${p.color}`)};
  font-family: ${getTheme('fonts.primary')};
  font-size: ${prop('fontSize')};
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  text-decoration: underline;

  & + & {
    margin-left: 5px;
  }

  &:hover {
    color: ${p => getTheme(`colors.${p.color}`, darken(0.1))};
  }
`
