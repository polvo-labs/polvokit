import React from 'react'
import Input from '../Input'

function Textarea ({ style, ...props }) {
  return (
    <Input
      as='textarea'
      style={{
        padding: 10,
        height: 'auto',
        ...style
      }}
      {...props}
    />
  )
}

export default Textarea
