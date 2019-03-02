import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Icon from '../Icon'
import { Container } from './styles'

function Toast ({ message, onDismiss }) {
  return (
    <Container>
      <div>
        {message.content}
      </div>
      <div>
        <Button
          type='button'
          title='Close'
          outline
          color='white'
          size='small'
          onClick={onDismiss}
        >
          <Icon icon='times' />
        </Button>
      </div>
    </Container>
  )
}

Toast.propTypes = {
  /** Message object */
  message: PropTypes.object.isRequired,

  /** Dismiss callback */
  onDismiss: PropTypes.func.isRequired
}

export default Toast
