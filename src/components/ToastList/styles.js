import styled, { keyframes } from 'styled-components'
import { prop } from 'styled-tools'

const animation = keyframes`
  from {
    transform: translateY(calc(-100% - 30px));
  }

  to {
    transform: translateY(0);
  }
`

export const Item = styled.div`
  position: absolute;
  top: ${prop('top')}px;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  transition: all 0.2s ease;
  animation: ${animation} 0.2s ease;
`
