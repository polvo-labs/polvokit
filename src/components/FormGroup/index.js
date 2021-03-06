import React, { useMemo } from 'react'
import nanoid from 'nanoid'
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
      {label && <Label htmlFor={id}>{label}</Label>}
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
  /** Control's ID */
  id: PropTypes.string,

  /** Label */
  label: PropTypes.string,

  /** Error */
  error: PropTypes.string,

  /** Helper */
  helper: PropTypes.string,

  /** Children */
  children: PropTypes.element.isRequired
}

export default FormGroup
