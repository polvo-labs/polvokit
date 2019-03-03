import React from 'react'
import { createPortal } from 'react-dom'
import { PoseGroup } from 'react-pose'
import Toast from '../Toast'
import { Container, Item } from './styles'

function ToastList (props) {
  const {
    messages,
    container,
    onDismiss
  } = props

  return createPortal(
    <Container>
      <PoseGroup>
        {messages.map((message, index) => (
          <Item
            key={message.id}
            top={(messages.length - index) * 30 + (30 * (messages.length - index))}
          >
            <Toast
              message={message}
              onDismiss={() => onDismiss(message.id)}
            />
          </Item>
        ))}
      </PoseGroup>
    </Container>,
    container
  )
}

export default ToastList
