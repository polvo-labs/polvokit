import React from 'react'
import {
  Container,
  InputStyled,
  Before
} from './styles'

function Input ({ before, after, ...props }) {
  return (
    <Container>
      {before && (
        <Before>
          {before}
        </Before>
      )}
      <InputStyled {...props} />
    </Container>
  )
}

export default Input
