import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { mq } from '../..'

const stackCss = css`
  width: auto;
  flex-direction: column;
  
  > * {
    border-radius: 0;
    margin: 0 !important;

    &:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`

export const Container = styled.div`
  display: flex;

  ${ifProp('fill', css`
    width: 100%;
    > * {
      flex: 1 1;
    }
  `)}

  ${ifProp('stack', stackCss)}

  > * {
    ${p => !p.stack && mq.above(p.stackAt, css`
      margin: 0 !important;
      border-radius: 0;

      &:first-child {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
  
      &:last-child {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    `)(p)}
  }

  ${p => !p.stack && mq.below(p.stackAt, stackCss)(p)}
`
