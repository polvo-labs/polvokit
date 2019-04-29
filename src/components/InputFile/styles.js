import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
`

export const HiddenInputFile = styled.input.attrs({
  type: 'file'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  visibility: hidden;
`
