import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../theme'
import { Container } from './styles'

export default function Badge (props) {
  return (
    <Container {...props} />
  )
}

Badge.propTypes = {
  /** Background color */
  appearance: PropTypes.oneOf(
    Object.keys(theme.colors)
  ),

  /** Text color */
  color: PropTypes.oneOf(
    Object.keys(theme.colors)
  )
}

Badge.defaultProps = {
  appearance: 'primary',
  color: 'white'
}
