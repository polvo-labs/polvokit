import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { ifProp, switchProp } from 'styled-tools'
import { mq, getTheme } from '../..'

const fullCss = css`
  display: flex;
  width: 100%;
`

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${getTheme('dimensions.controlHeight')};
  background-color: ${p => getTheme(`colors.${p.appearance}`)};
  color: ${p => p.appearance === 'default' ? '#000' : '#fff'};
  cursor: pointer;
  border: none;
  border-radius: 3px;
  font-family: ${getTheme('fonts.primary')};
  text-decoration: none;
  box-sizing: border-box;

  ${switchProp('size', {
    small: css`
      font-size: 14px;
      padding: 0 15px;
      height: 30px;
    `,
    default: css`
      padding: 0 15px;    
      font-size: 16px;
      height: ${getTheme('dimensions.controlHeight')};
    `,
    large: css`
      padding: 0 30px;
      font-size: 18px;
      height: 60px;
    `
  })};

  ${ifProp('full', fullCss)}
  
  ${p => p.fullAt && mq.below(p.fullAt, fullCss)(p)}

  & + & {
    margin-left: 10px;
  }

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background-color: ${p => getTheme(`colors.${p.appearance}`, darken(0.05))};
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
