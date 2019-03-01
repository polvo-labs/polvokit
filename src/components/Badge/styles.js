import styled from 'styled-components'
import { getTheme } from '../..'

export const Container = styled.div`
  display: inline-block;
  padding: 3px 5px;
  border-radius: 5px;
  background-color: ${p => getTheme(`colors.${p.appearance}`)};
  color: ${p => getTheme(`colors.${p.color}`)};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  & + & {
    margin-left: 5px;
  }
`
