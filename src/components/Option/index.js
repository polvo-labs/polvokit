import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Text from '../Text'
import {
  Container,
  Input,
  Check
} from './styles'

function Option (props) {
  const {
    label,
    labelProps,
    type,
    ...rest
  } = props

  return (
    <div>
      <Container>
        <Input
          type={type}
          {...rest}
        />
        <Check type={type}>
          <div>
            <Icon icon='check' />
          </div>
        </Check>
        <Text {...labelProps}>
          {label}
        </Text>
      </Container>
    </div>
  )
}

Option.propTypes = {
  /** Option type */
  type: PropTypes.oneOf([
    'checkbox',
    'radio'
  ]).isRequired,

  /** Label */
  label: PropTypes.any.isRequired,

  /** Label Props */
  labelProps: PropTypes.object
}

export default Option
