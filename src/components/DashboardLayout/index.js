import React from 'react'
import {
  GlobalStyles,
  Container,
  Sidebar,
  ContentWrapper,
  Content
} from './styles'

export default function DashboardLayout ({ sidebar, children }) {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Container>
        <Sidebar>
          {sidebar}
        </Sidebar>
        <ContentWrapper>
          <Content>
            {children}
          </Content>
        </ContentWrapper>
      </Container>
    </React.Fragment>
  )
}
