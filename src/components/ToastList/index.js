import React from 'react'
import { createPortal } from 'react-dom'
import { PoseGroup } from 'react-pose'
import Toast from '../Toast'
import { Item } from './styles'

function ToastList (props) {
  const {
    messages,
    container,
    onDismiss
  } = props

  return createPortal(
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
    </PoseGroup>,
    container
  )
}

export default ToastList
