import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Color = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${prop('color')};
  box-shadow: rgba(27,27,27,0.25) 0 0 1px;
`

export const ColorLabel = styled.span`
  display: inline-block;
  background-color: #000;
  padding: 10px;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
`
