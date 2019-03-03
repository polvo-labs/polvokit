import React from 'react'
import {
  VerticalSpacer,
  Button,
  useToast
} from '../../../src'

export default function HomeScreen () {
  const { push, messages, clearAll } = useToast()

  return (
    <VerticalSpacer space={5}>
      <div>
        <Button
          type='button'
          appearance='success'
          onClick={() => {
            push({
              type: 'success',
              content: 'Successful toast message'
            })
          }}
        >
          Show successful toast
        </Button>
      </div>
      <div>
        <Button
          type='button'
          appearance='danger'
          onClick={() => {
            push({
              type: 'danger',
              content: 'Dangerous toast mesage'
            })
          }}
        >
          Show dangerous toast
        </Button>
      </div>
      <div>
        <Button
          type='button'
          appearance='warning'
          onClick={() => {
            push({
              type: 'warning',
              content: 'Warning toast message'
            })
          }}
        >
          Show warning toast
        </Button>
      </div>
      <div>
        <Button
          type='button'
          outline
          onClick={() => clearAll()}
        >
          Clear all
        </Button>
      </div>
    </VerticalSpacer>
  )
}
