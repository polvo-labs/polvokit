import React from 'react'
import ReactSelect from 'react-select'
import { Container } from './styles'

function Select (props) {
  return (
    <Container>
      <ReactSelect
        classNamePrefix='react-select'
        {...props}
      />
    </Container>
  )
}

export default Select