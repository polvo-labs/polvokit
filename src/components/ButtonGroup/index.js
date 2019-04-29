import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styles'

function ButtonGroup (props) {
  const {
    stack,
    stackAt,
    full,
    children,
    ...rest
  } = props

  return (
    <Container
      stack={stack}
      stackAt={stackAt}
      full={full}
      {...rest}
    >
      {children}
    </Container>
  )
}

ButtonGroup.propTypes = {
  /** Fill the remaining space */
  full: PropTypes.bool,

  /** Stack buttons */
  stack: PropTypes.bool,

  /** Stack at certain breakpoint */
  stackAt: PropTypes.string
}

ButtonGroup.defaultProps = {
  full: false,
  stack: false,
  stackAt: 'small'
}

export default ButtonGroup
