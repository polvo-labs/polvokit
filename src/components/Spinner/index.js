import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import { Container, ImageContainer } from './styles'
import spinner from './spinner.gif'

function Spinner ({ size, style, ...props }) {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={spinner}
          alt='Loading'
          style={{
            width: `${size}%`,
            ...style
          }}
          {...props}
        />
      </ImageContainer>
    </Container>
  )
}

Spinner.propTypes = {
  /** Size in % */
  size: PropTypes.number
}

Spinner.defaultProps = {
  size: 50
}

export default Spinner
