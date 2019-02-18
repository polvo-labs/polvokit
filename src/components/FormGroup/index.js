import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Label,
  Control,
  Helper,
  Error
} from './styles'

function FormGroup ({ id, label, error, helper, children }) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Control>
        {children}
      </Control>
      {helper && (
        <Helper htmlFor={id}>{helper}</Helper>
      )}
      {error && (
        <Error htmlFor={id}>{error}</Error>
      )}
    </Container>
  )
}

FormGroup.propTypes = {
  /** Control's ID the will be used in `htmlFor` prop */
  id: PropTypes.string.isRequired,

  /** Label */
  label: PropTypes.string.isRequired,

  /** Error */
  error: PropTypes.string,

  /** Helper */
  helper: PropTypes.string,

  /** Children */
  children: PropTypes.element.isRequired
}

export default FormGroup
