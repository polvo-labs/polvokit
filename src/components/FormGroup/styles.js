import styled from 'styled-components/macro'
import theme from '../../utils/theme'

export const Container = styled.div`
  color: ${theme('colors.text')};
`

export const Label = styled.label`
  display: block;
  font-size: 16px;
`

export const Helper = styled.label`
  display: block;
  font-size: 12px;
`

export const Error = styled.label`
  display: block;
  font-size: 14px;
  color: ${theme('colors.danger')};
`

export const Control = styled.div`
  margin: 5px 0;
`
