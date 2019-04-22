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

function FormGroup ({ id: propId, label, error, helper, children }) {
  const id = useMemo(
    () => propId || nanoid(),
    [propId]
  )

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
  /** Control's ID the will be used in `htmlFor` prop. If you don't pass an ID, it will be automatically generated */
  id: PropTypes.string,

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
