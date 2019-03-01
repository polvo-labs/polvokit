import styled from 'styled-components'
import { prop } from 'styled-tools'
import { getTheme } from '../..'

export const TextStyled = styled.p`
  display: block;
  margin: 0;
  padding: 0;
  color: ${p => getTheme(`colors.${p.color}`)};
  font-family: ${p => getTheme(`fonts.${p.fontFamily}`)};
  font-size: ${prop('fontSize')};
  font-weight: ${prop('fontWeight')};
  font-style: ${prop('fontStyle')};
  line-height: ${prop('lineHeight')};
  text-decoration: ${prop('textDecoration')};
`
