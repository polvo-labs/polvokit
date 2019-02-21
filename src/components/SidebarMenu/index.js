import React, { useState } from 'react'
import Icon from '../Icon'
import { Menu, MenuButton } from './styles'

export default function SidebarMenu (props) {
  const [ state, setState ] = useState(false)
  const icon = state ? 'times' : 'bars'

  return (
    <React.Fragment>
      <Menu
        open={state}
        {...props}
      />
      <MenuButton
        type='button'
        onClick={() => setState(!state)}
        title='Menu'
      >
        <Icon icon={icon} />
      </MenuButton>
    </React.Fragment>
  )
}
