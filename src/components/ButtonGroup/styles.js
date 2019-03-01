import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'
import { mq } from '../..'

const stackCss = css`
  width: auto;
  flex-direction: column;

  > * {
    border-radius: 0 !important;
    margin: 0 !important;

    &:first-child {
      border-top-left-radius: 3px !important;
      border-top-right-radius: 3px !important;
    }

    &:last-child {
      border-bottom-left-radius: 3px !important;
      border-bottom-right-radius: 3px !important;
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
      border-radius: 0 !important;

      &:first-child {
        border-top-left-radius: 3px !important;
        border-bottom-left-radius: 3px !important;
      }
  
      &:last-child {
        border-top-right-radius: 3px !important;
        border-bottom-right-radius: 3px !important;
      }
    `)(p)}
  }

  ${p => !p.stack && mq.below(p.stackAt, stackCss)(p)}
`
