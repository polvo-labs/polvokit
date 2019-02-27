import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { LinkStyled } from './styles'

function Link (props) {
  return <LinkStyled {...props} />
}

Link.propTypes = {
  /** Component type */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),

  /** Color */
  color: PropTypes.string,

  /** Font size */
  fontSize: PropTypes.string
}

Link.defaultProps = {
  as: RouterLink,
  color: 'primary',
  fontSize: '16px'
}

export default Link
