import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'
import {
  Container,
  Switcher
} from './styles'

function Switch (props) {
  const {
    value,
    onChange,
    label,
    labelProps,
    disabled,
    ...rest
  } = props

  return (
    <div {...rest}>
      <Container
        disabled={disabled}
        onClick={() => {
          if (!disabled) {
            onChange(!value)
          }
        }}
      >
        <Switcher
          switched={value}
          disabled={disabled}
        />
        <Text as='div' {...labelProps}>
          {label}
        </Text>
      </Container>
    </div>
  )
}

Switch.propTypes = {
  /** Current value */
  value: PropTypes.bool.isRequired,

  /** Change handler */
  onChange: PropTypes.func.isRequired,

  /** Label content */
  label: PropTypes.any.isRequired,

  /** Label props */
  labelProps: PropTypes.object,

  /** Disables switch */
  disabled: PropTypes.bool
}

Switch.defaultProps = {
  disabled: false
}

export default Switch
