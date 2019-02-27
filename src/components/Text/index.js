import React from 'react'
import PropTypes from 'prop-types'
import { TextStyled } from './styles'

function Text (props) {
  return (
    <TextStyled {...props} />
  )
}

Text.propTypes = {
  /** Component type */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),

  /** Text color */
  color: PropTypes.string,

  /** Font family */
  fontFamily: PropTypes.string,

  /** Font weight */
  fontWeight: PropTypes.string,

  /** Font size */
  fontSize: PropTypes.string,

  /** Line height */
  lineHeight: PropTypes.string,

  /** Text decoration */
  textDecoration: PropTypes.string
}

Text.defaultProps = {
  as: 'p',
  color: 'text',
  fontFamily: 'primary',
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '1.5',
  textDecoration: 'none'
}

export default Text
