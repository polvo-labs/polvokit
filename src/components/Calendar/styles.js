import styled, { css } from 'styled-components'
import { ifProp, ifNotProp } from 'styled-tools'
import theme from '../../utils/theme'

export const Container = styled.div`
  border: 1px solid ${theme('colors.control')};
  border-radius: 3px;
  background-color: #fff;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme('colors.control')};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 40px;
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
  align-items: center;
  border-bottom: 1px solid ${theme('colors.control')};
  height: 30px;
  background-color: ${theme('colors.light')};
`

export const Weekday = styled.div`
  flex: 1 1;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 0;
`

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  width: ${1 / 7 * 100}%;
`

export const Day = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  margin: 5px;
  padding: 0;

  ${ifProp('isAdjacentMonth', css`
    color: ${theme('colors.placeholder')};
  `)}

  ${ifNotProp('isAdjacentMonth', css`
    color: ${theme('colors.text')};
  `)}

  ${ifProp('isToday', css`
    font-weight: bold;
  `)}

  ${ifProp('isSelected', css`
    background-color: ${theme('colors.primary')};
    color: #fff;
  `)}

  ${p => !p.isSelected && !p.isDisabled && css`
    &:hover {
      background-color: ${theme('colors.light')};
    }
  `}

  ${ifProp('isDisabled', css`
    cursor: not-allowed;
    color: ${theme('colors.danger')};
  `)}
`
