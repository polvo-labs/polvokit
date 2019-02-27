import React from 'react'
import styled, { css } from 'styled-components'
import { mq } from '../..'

export default function SidebarHeader (props) {
  return (
    <Header {...props} />
  )
}

const Header = styled.header`
  ${mq.above('sidebar', css`
    padding: 20px 30px;
    margin-bottom: 15px;
  `)}

  ${mq.below('sidebar', css`
    width: 150px;
    flex-shrink: 0;
  `)}
`
