import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Icon from '../Icon'
import { Container } from './styles'

function Toast ({ message, onDismiss }) {
  const [ hovered, setHovered ] = useState(false)

  useEffect(() => {
    if (hovered) {
      return
    }

    const interval = window.setInterval(() => {
      onDismiss()
    }, 5000)

    return () => window.clearInterval(interval)
  }, [hovered])

  return (
    <Container
      type={message.type}
      onMouseEnter={() => !hovered && setHovered(true)}
      onMouseLeave={() => hovered && setHovered(false)}
    >
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
