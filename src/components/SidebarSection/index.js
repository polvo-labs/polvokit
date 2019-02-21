import React from 'react'
import PropTypes from 'prop-types'
import { Container, Title } from './styles'

function SidebarSection ({ title, children, ...props }) {
  return (
    <Container {...props}>
      {title && <Title>{title}</Title>}
      <div>
        {children}
      </div>
    </Container>
  )
}

SidebarSection.propTypes = {
  /** Title */
  title: PropTypes.string,

  /** Align to bottom */
  bottom: PropTypes.bool
}

SidebarSection.defaultProps = {
  bottom: false
}

export default SidebarSection
