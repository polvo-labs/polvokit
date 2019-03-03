import styled from 'styled-components'
import { getTheme } from '../..'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => getTheme(`colors.${p.type}`)};
  padding: 10px;
  border-radius: 3px;
  font-family: ${getTheme('fonts.primary')};
  font-size: 14px;
  color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`
