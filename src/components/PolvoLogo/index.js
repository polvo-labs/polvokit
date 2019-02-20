import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import logo from './polvo.svg'
import logoWhite from './polvo-white.svg'

export default function PolvoLogo ({ white, ...props }) {
  return (
    <Image src={white ? logoWhite : logo} {...props} />
  )
}

PolvoLogo.propTypes = {
  /** Use the white version */
  white: PropTypes.bool
}

PolvoLogo.defaultProps = {
  white: false
}
