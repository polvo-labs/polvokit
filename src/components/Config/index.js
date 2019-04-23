import React from 'react'
import PropTypes from 'prop-types'
import useConfig from './useConfig'

export default function Config ({ id, defaultValue }) {
  const value = useConfig({ id, defaultValue })
  return <React.Fragment>{value}</React.Fragment>
}

Config.propTypes = {
  /** the config key */
  id: PropTypes.string.isRequired,

  /** Fallback value */
  defaultValue: PropTypes.any
}
