import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'
import {
  Container,
  Button
} from './styles'

function Switch (props) {
  const {
    value,
    onChange,
    label,
    labelProps,
    ...rest
  } = props

  return (
    <div {...rest}>
      <Container onClick={() => {
        onChange(!value)
      }}>
        <Button switched={value}>

        </Button>
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
  labelProps: PropTypes.object
}

export default Switch
