import styled from 'styled-components'
import { switchProp } from 'styled-tools'
import { getTheme } from '../..'

export const Container = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`

export const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #fff;
  width: 27px;
  height: 27px;
  border: 1px solid ${getTheme('colors.control')};
  border-radius: ${switchProp('type', {
    checkbox: '3px',
    radio: '100%'
  })};
  margin-right: 10px;
  font-size: 14px;
  box-sizing: border-box;
  background-color: #fff;
  transition: 0.2s ease all;

  > :first-child {
    visibility: hidden;
  }
`

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
  pointer-events: none;

  &:checked + ${Check} {
    background-color: ${getTheme('colors.success')};
    border-color: ${getTheme('colors.success')};
    > :first-child {
      visibility: visible;
    }
  }
`
