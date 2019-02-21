import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import filterProps from '../../utils/filterProps'
import { ButtonStyled, Before } from './styles'

function SidebarButton ({ before, children, ...props }) {
  return (
    <ButtonStyled {...props}>
      {before && <Before>{before}</Before>}
      {children}
    </ButtonStyled>
  )
}

SidebarButton.propTypes = {
  /** Before button's content */
  before: PropTypes.element
}

const FilteredNavLink = props =>
  <NavLink {...filterProps(props, SidebarButton.propTypes)} />

SidebarButton.NavLink = function SidebarButtonNavLink (props) {
  return (
    <SidebarButton
      as={FilteredNavLink}
      {...props}
    />
  )
}

export default SidebarButton
