import styled from 'styled-components/macro'
import theme from '../../utils/theme'

export const Container = styled.div`
  display: block;
  width: 100%;
  position: relative;
  color: #000;
`

export const InputStyled = styled.input`
  display: flex;
  width: 100%;
  height: ${theme('dimensions.controlHeight')};
  background-color: #fff;
  border: 1px solid ${theme('colors.control')};
  box-sizing: border-box; 
  font-family: ${theme('fonts.primary')};
  font-size: 16px;
  color: #000;
  padding: 0 10px;
  border-radius: 3px;

  &:focus {
    border-color: ${theme('colors.primary')};
    box-shadow: 0 0 1px ${theme('colors.primary')};
  }

  &[disabled] {
    cursor: not-allowed;
    background: ${theme('colors.disabled')};
  }
  
  &::placeholder {
    opacity: 1;
    color: ${theme('colors.placeholder')};
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
  
  + ${InputStyled} {
    padding-left: 35px;
  }
`
