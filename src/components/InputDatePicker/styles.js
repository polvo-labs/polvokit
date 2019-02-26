import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import theme from '../../utils/theme'

export const Container = styled.div`
  position: relative;
`

export const CalendarWrapper = styled.div`
  width: 300px;
  margin-top: 10px;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease all, 0s visibility;
  transition-delay: 0.1s;
  position: absolute;
  z-index: ${theme('stacks.control')};

  ${ifProp('show', css`
    visibility: visible;
    opacity: 1;
    pointer-events: all;
  `)}
`