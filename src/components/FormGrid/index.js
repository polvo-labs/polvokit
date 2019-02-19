import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

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
  ${props => mediaQuery.greaterThan(props.breakpoint)`
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
  `}

  ${props => mediaQuery.lessThan(props.breakpoint)`
    > * + * {
      margin-top: 20px;
    }
  `}
`
