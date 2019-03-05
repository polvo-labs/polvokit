import styled from 'styled-components'
import { getTheme } from '../..'

const colors = {
  default: 'primary',
  error: 'danger',
  success: 'success',
  warning: 'warning'
}

const getColor = props => {
  const color = colors[props.type]
  return getTheme(`colors.${color}`)
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${getColor};
  padding: 10px;
  border-radius: 3px;
  font-family: ${getTheme('fonts.primary')};
  font-size: 14px;
  color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`
