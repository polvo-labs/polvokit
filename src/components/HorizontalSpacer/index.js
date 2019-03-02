import React from 'react'
import PropTypes from 'prop-types'
import { Spacer } from './styles'

function HorizontalSpacer (props) {
  return <Spacer {...props} />
}

HorizontalSpacer.propTypes = {
  /** Vertical alignment */
  align: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end'
  ]),

  /** At which breakpoint it will break */
  breakAt: PropTypes.string
}

HorizontalSpacer.defaultProps = {
  align: 'center',
  breakAt: 'small'
}

export default HorizontalSpacer
