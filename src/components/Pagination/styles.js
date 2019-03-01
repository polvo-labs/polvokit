import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import { getTheme } from '../..'

export const Container = styled.div`
  ${ifProp('center', 'text-align: center;')}
`

export const Paginator = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${getTheme('colors.control')};
  border-radius: 3px;
`

export const Button = styled.button.attrs({
  type: 'button'
})`
  cursor: pointer;
  height: ${getTheme('dimensions.controlHeight')};
  padding: 0 10px;
  border: none;
  background-color: transparent;
  color: ${getTheme('colors.primary')};

  &[disabled] {
    cursor: not-allowed;
    color: ${getTheme('colors.control')};
  }

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background-color: ${getTheme('colors.light')};
  }

  &:not([disabled]):active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)
  }
`

export const Current = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${getTheme('colors.text')};
  font-family: ${getTheme('fonts.primary')};
  font-size: 16px;
  flex-grow: 1;
  width: 150px;
  height: ${getTheme('dimensions.controlHeight')};
  border-left: 1px solid ${getTheme('colors.control')};
  border-right: 1px solid ${getTheme('colors.control')};
`
