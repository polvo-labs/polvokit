import React from 'react'
import {
  Button,
  useToast
} from '../../../src'

export default function HomeScreen () {
  const { push } = useToast()

  return (
    <div>
      <Button type='button' onClick={() => {
        push({
          type: 'success',
          content: 'New message test'
        })
      }}>
        Show toast
      </Button>
    </div>
  )
}
