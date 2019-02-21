import styled, { createGlobalStyle } from 'styled-components'
import theme from '../../utils/theme'
import mediaQuery from '../../utils/mediaQuery'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  ${mediaQuery.greaterThan('sidebar')`
    display: flex;
    min-height: 100vh;
  `}
`

export const Sidebar = styled.aside`
  box-sizing: border-box;
  background-color: ${theme('colors.sidebar')};
  position: relative;

  ${mediaQuery.greaterThan('sidebar')`
    display: flex;
    flex-direction: column;
    width: ${theme('dimensions.sidebarWidth')};
    flex-shrink: 0;
    padding: 15px;
    height: 100vh;
    overflow: auto;
  `}

  ${mediaQuery.lessThan('sidebar')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  `}
`

export const ContentWrapper = styled.div`
  font-family: ${theme('fonts.primary')};
  box-sizing: border-box;

  ${mediaQuery.greaterThan('sidebar')`
    flex-grow: 1;
    height: 100vh;
    overflow: auto;
  `}
`

export const Content = styled.div`
  ${mediaQuery.greaterThan('sidebar')`
    padding: 40px;
  `}

  ${mediaQuery.lessThan('sidebar')`
    padding: 20px;
  `}
`
