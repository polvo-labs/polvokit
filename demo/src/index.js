import React from 'react'
import { render } from 'react-dom'
import { ToastProvider } from '../../src'
import App from './App'

render(
  (
    <ToastProvider>
      <App />
    </ToastProvider>
  ),
  document.querySelector('#demo')
)
