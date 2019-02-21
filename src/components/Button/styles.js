import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { ifProp } from 'styled-tools'
import theme from '../../utils/theme'
import mediaQuery from '../../utils/mediaQuery'

const fullCss = css`
  display: flex;
  width: 100%;
`

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${theme('dimensions.controlHeight')};
  padding: 0 15px;
  background-color: ${p => theme(`colors.${p.appearance}`)};
  color: ${p => p.appearance === 'default' ? '#000' : '#fff'};
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-family: ${theme('fonts.primary')};
  font-size: 16px;
  text-decoration: none;
  box-sizing: border-box;

  ${ifProp('full', fullCss)}
  
  ${p => p.fullAt && mediaQuery.lessThan(p.fullAt)(fullCss)}

  & + & {
    margin-left: 10px;
  }

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background-color: ${p => theme(`colors.${p.appearance}`, darken(0.05))};
  }

  &:not([disabled]):active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)
  }

  &[disabled] {
    opacity: 0.65;
    cursor: not-allowed;
  }
`

export const Before = styled.span`
  margin-right: 10px;
`

export const After = styled.span`
  margin-left: 10px;
`

export const Loading = styled.span`
  padding: 0 20px;
`
