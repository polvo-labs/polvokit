import React from 'react'
import PropTypes from 'prop-types'
import Box from '../Box'
import VerticalSpacer from '../VerticalSpacer'
import Text from '../Text'

function Card ({ title, titleProps, children, ...props }) {
  return (
    <Box
      as='section'
      padded
      {...props}
    >
      <VerticalSpacer space={15}>
        <Text
          as='h2'
          fontWeight='bold'
          fontSize='20px'
          {...titleProps}
        >
          {title}
        </Text>
        <div>
          {children}
        </div>
      </VerticalSpacer>
    </Box>
  )
}

Card.propTypes = {
  /** Title */
  title: PropTypes.string.isRequired,

  /** Title props */
  titleProps: PropTypes.object,

  /** Content */
  children: PropTypes.any
}

export default Card
