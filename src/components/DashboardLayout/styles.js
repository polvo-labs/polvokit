import styled, { createGlobalStyle, css } from 'styled-components'
import { mq, getTheme } from '../..'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  ${mq.above('sidebar', css`
    display: flex;
    min-height: 100vh;
  `)}
`

export const Sidebar = styled.aside`
  box-sizing: border-box;
  background-color: ${getTheme('colors.sidebar')};
  position: relative;

  ${mq.above('sidebar', css`
    display: flex;
    flex-direction: column;
    width: ${getTheme('dimensions.sidebarWidth')};
    flex-shrink: 0;
    padding: 15px;
    height: 100vh;
    overflow: auto;
  `)}

  ${mq.below('sidebar', css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  `)}
`

export const ContentWrapper = styled.div`
  font-family: ${getTheme('fonts.primary')};
  box-sizing: border-box;

  ${mq.above('sidebar', css`
    flex-grow: 1;
    height: 100vh;
    overflow: auto;
  `)}
`

export const Content = styled.div`
  ${mq.above('sidebar', css`
    padding: 40px;
  `)}

  ${mq.below('sidebar', css`
    padding: 20px;
  `)}
`
