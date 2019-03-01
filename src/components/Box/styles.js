import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import { getTheme } from '../..'

export const BoxStyled = styled.div`
  background-color: #ffffff;
  border: 1px solid ${getTheme('colors.light')};
  border-radius: 3px;
  box-shadow: 0 2px 5px 0 #0000000c;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  ${ifProp('padded', 'padding: 15px')};
`
