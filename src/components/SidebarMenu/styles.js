import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import mediaQuery from '../../utils/mediaQuery'
import theme from '../../utils/theme'

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${mediaQuery.lessThan('sidebar')`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: ${theme('colors.sidebar')};
    z-index: 999999;
    box-sizing: border-box;

    ${ifProp('open', 'display: block;')}
  `}
`

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;

  ${mediaQuery.greaterThan('sidebar')`
    display: none;
  `}
`
