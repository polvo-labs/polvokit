import React from 'react'
import { Text } from '../..'

export default function Heading (props) {
  return (
    <Text
      as='h1'
      fontFamily='secondary'
      fontWeight='bold'
      fontSize='40px'
      {...props}
    />
  )
}
