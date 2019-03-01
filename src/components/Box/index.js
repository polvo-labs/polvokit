import React from 'react'
import PropTypes from 'prop-types'
import { BoxStyled } from './styles'

function Box (props) {
  return <BoxStyled {...props} />
}

Box.propTypes = {
  /** Padded box */
  padded: PropTypes.bool
}

Box.defaultProps = {
  padded: false
}

export default Box
