import React from 'react'
import PropTypes from 'prop-types'
import { Button, Config } from '../..'

function ButtonSubmit (props) {
  const {
    submitting,
    label,
    submittingLabel,
    ...rest
  } = props

  return (
    <Button
      appearance='primary'
      size='large'
      type='submit'
      children={submitting ? submittingLabel : label}
      disabled={submitting}
      {...rest}
    />
  )
}

ButtonSubmit.propTypes = {
  /** Submitting */
  submitting: PropTypes.bool,

  /** Label */
  label: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element
  ]),

  /** Submitting label */
  submittingLabel: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.element
  ])
}

ButtonSubmit.defaultProps = {
  submitting: false,
  label: <Config id='messages.save' />,
  submittingLabel: <Config id='messages.submitting' />
}

export default ButtonSubmit
