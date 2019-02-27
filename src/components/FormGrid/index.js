import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { mq } from '../..'

export default function FormGrid (props) {
  return <Grid {...props} />
}

FormGrid.propTypes = {
  /** Breakpoint */
  breakpoint: PropTypes.string,

  /** Vertical alignment */
  alignItems: PropTypes.oneOf([
    'flex-start', 'center', 'flex-end'
  ])
}

FormGrid.defaultProps = {
  breakpoint: 'medium',
  alignItems: 'flex-start'
}

export const Grid = styled.div`
  ${props => mq.above(props.breakpoint, css`
    display: flex;
    align-items: ${props => props.alignItems};
    justify-content: space-between;

    > * {
      width: 100%;
      margin: 0 10px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  `)(props)}

  ${props => mq.below(props.breakpoint, css`
    > * + * {
      margin-top: 20px;
    }
  `)(props)};
`
