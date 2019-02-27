import styled from 'styled-components'
import { prop } from 'styled-tools'
import theme from '../../utils/theme'

export const TextStyled = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  color: ${p => theme(`colors.${p.color}`)};
  font-family: ${p => theme(`fonts.${p.fontFamily}`)};
  font-size: ${prop('fontSize')};
  font-weight: ${prop('fontWeight')};
  font-style: ${prop('fontStyle')};
  line-height: ${prop('lineHeight')};
  text-decoration: ${prop('textDecoration')};
`
