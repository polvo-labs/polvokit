import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../../utils/mediaQuery'

export default function SidebarHeader (props) {
  return (
    <Header {...props} />
  )
}

const Header = styled.header`
  ${mediaQuery.greaterThan('sidebar')`
    padding: 20px 30px;
    margin-bottom: 15px;
  `}

  ${mediaQuery.lessThan('sidebar')`
    width: 150px;
    flex-shrink: 0;
  `}
`
