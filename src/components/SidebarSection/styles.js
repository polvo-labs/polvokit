import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import theme from '../../utils/theme'

export const Container = styled.section`
  ${ifProp('bottom', 'margin-top: auto;')}

  &:not(:last-child) {
    padding-bottom: 25px;
  }
`

export const Title = styled.h2`
  display: block;
  font-size: 10px;
  font-family: ${theme('fonts.primary')};
  color: ${theme('colors.textLight')};
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 10px;
`
