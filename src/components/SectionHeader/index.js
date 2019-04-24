import React from 'react'
import PropTypes from 'prop-types'
import { HorizontalSpacer, Heading } from '../..'

export default function SectionHeader (props) {
  const {
    title,
    headingProps,
    side,
    ...rest
  } = props

  return (
    <HorizontalSpacer {...rest}>
      <Heading {...headingProps}>{title}</Heading>
      {side && <React.Fragment>{side}</React.Fragment>}
    </HorizontalSpacer>
  )
}

SectionHeader.propTypes = {
  /** Title text */
  title: PropTypes.string.isRequired,

  /** Props that will be passed down to the Heading */
  headingProps: PropTypes.object,

  /** Side component */
  side: PropTypes.element
}
