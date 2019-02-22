import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div`
  border: 1px solid ${theme('colors.control')};
  border-radius: 3px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme('colors.control')};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 55px;
`

export const HeaderButton = styled.button.attrs({
  type: 'button'
})`
  padding: 0 15px;
  height: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${theme('colors.primary')};

  &:hover,
  &:active {
    background-color: ${theme('colors.light')};
  }

  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125)
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: inherit;
  border-left: 1px solid ${theme('colors.control')};
  border-right: 1px solid ${theme('colors.control')};
`

export const Weekdays = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme('colors.control')};
  height: 40px;
`

export const Weekday = styled.div`

`

export const Grid = styled.div`
  padding: 20px;
`
