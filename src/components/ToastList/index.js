import React from 'react'
import { createPortal } from 'react-dom'
import Toast from '../Toast'
import { Item } from './styles'

function ToastList (props) {
  const {
    messages,
    container,
    onDismiss
  } = props

  return createPortal(
    <div>
      {messages.map((message, index) => (
        <Item
          key={message.id}
          top={(messages.length - index) * 30 + (15 * (messages.length - index))}
        >
          <Toast
            message={message}
            onDismiss={() => onDismiss(message.id)}
          />
        </Item>
      ))}
    </div>,
    container
  )
}

export default ToastList
