import React from 'react'
import styled from 'styled-components'

export default function Image (props) {
  return <ImageStyled {...props} />
}

const ImageStyled = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`
