import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

function ButtonGroup (props) {
  const {
    stack,
    stackAt,
    fill,
    children,
    ...rest
  } = props

  return (
    <Container
      stack={stack}
      stackAt={stackAt}
      fill={fill}
      {...rest}
    >
      {children}
    </Container>
  )
}

ButtonGroup.propTypes = {
  /** Fill the remaining space */
  fill: PropTypes.bool,

  /** Stack buttons */
  stack: PropTypes.bool,

  /** Stack at certain breakpoint */
  stackAt: PropTypes.string
}

ButtonGroup.defaultProps = {
  fill: false,
  stack: false,
  stackAt: 'small'
}

export default ButtonGroup
