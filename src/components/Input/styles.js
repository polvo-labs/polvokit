import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { getTheme } from '../..'

const focusCss = css`
  border-color: ${getTheme('colors.primary')};
  box-shadow: 0 0 1px ${getTheme('colors.primary')};
`

export const Container = styled.div`
  display: block;
  width: 100%;
  position: relative;
  color: #000;
`

export const InputStyled = styled.input`
  display: flex;
  width: 100%;
  height: ${getTheme('dimensions.controlHeight')};
  background-color: #fff;
  box-sizing: border-box; 
  font-family: ${getTheme('fonts.primary')};
  font-size: 16px;
  color: ${getTheme('colors.text')};
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid ${getTheme('colors.control')};

  ${ifProp('focused', focusCss)}

  &:focus {
    ${focusCss}
  }
  
  &[disabled] {
    cursor: not-allowed;
    background: ${getTheme('colors.disabled')};
  }
  
  &::placeholder {
    opacity: 1;
    color: ${getTheme('colors.placeholder')};
  }
`

export const Before = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  width: 35px;
  pointer-events: none;
  color: ${getTheme('colors.text')};

  + ${InputStyled} {
    padding-left: 35px;
  }
`
