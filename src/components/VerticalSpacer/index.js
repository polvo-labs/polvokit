import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function VerticalSpacer (props) {
  return <Spacer {...props} />
}

const Spacer = styled.div`
  > * + * {
    margin-top: ${p => p.space}px !important;
  }
`

VerticalSpacer.propTypes = {
  /** Spacing between the children */
  space: PropTypes.number
}

VerticalSpacer.defaultProps = {
  space: 25
}

export default VerticalSpacer
