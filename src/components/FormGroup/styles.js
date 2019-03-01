import styled from 'styled-components'
import { getTheme } from '../..'

export const Container = styled.div`
  color: ${getTheme('colors.text')};
`

export const Label = styled.label`
  display: block;
  font-size: 16px;
`

export const Helper = styled.label`
  display: block;
  font-size: 12px;
  color: ${getTheme('colors.textLight')};
`

export const Error = styled.label`
  display: block;
  font-size: 14px;
  color: ${getTheme('colors.danger')};
`

export const Control = styled.div`
  margin: 3px 0;
`
