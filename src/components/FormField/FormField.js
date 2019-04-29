import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import nanoId from 'nanoid'
import { Field } from 'react-final-form'
import { FormGroup } from '../..'

export default function FormField (props) {
  const id = useMemo(() => nanoId(), [])

  const {
    component: Component,
    defaultValue = '',
    componentProps,
    label,
    helper,
    ...rest
  } = props

  return (
    <Field {...props}>
      {({ meta, input }) => {
        const value = input.value || defaultValue
        const error = getError(meta)

        return (
          <FormGroup
            id={id}
            label={label}
            helper={helper}
            error={error}
          >
            <Component
              {...input}
              {...rest}
              {...componentProps}
              value={value}
            />
          </FormGroup>
        )
      }}
    </Field>
  )
}

FormField.propTypes = {
  /** Label */
  label: PropTypes.string,

  /** Helper */
  helper: PropTypes.string,

  /** Component */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),

  /** Default value */
  defaultValue: PropTypes.any
}

const getError = meta => {
  if (meta.touched && meta.error) {
    return meta.error
  }

  if (meta.submitError) {
    return Array.isArray(meta.submitError)
      ? meta.submitError[0]
      : meta.submitError
  }

  return ''
}
