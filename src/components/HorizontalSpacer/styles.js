import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'
import { mq } from '../..'

export const Spacer = styled.div`
  width: 100%;

  ${mq.above(p => p.breakAt, css`
    display: flex;
    align-items: ${prop('align')};
    justify-content: space-between;

    > * + * {
      margin-left: 15px;
    }
  `)};

  ${mq.below(p => p.breakAt, css`
    > * + * {
      margin-top: 15px;
    }
  `)}
`
