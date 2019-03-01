import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { getTheme } from '../..'

export const Container = styled.button.attrs({
  type: 'button'
})`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
`

export const Button = styled.div`
  width: 50px;
  height: 26px;
  background-color: ${getTheme('colors.light')};
  border-radius: 100px;
  margin-right: 10px;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: " ";
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    background-color: #fff;
    border: 1px solid ${getTheme('colors.control')};
    left: 3px;
    top: 2px;
    box-sizing: border-box;
    transition: all 0.2s ease;

    ${ifProp('switched', css`
      border-color: transparent;
      left: ${50 - 22 - 3}px;
    `)}
  }
  
  ${ifProp('switched', css`
    background-color: ${getTheme('colors.success')};
  `)}
`
