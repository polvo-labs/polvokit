import styled from 'styled-components'
import theme from '../../utils/theme'

export const Container = styled.div`
  border: 1px solid ${theme('colors.control')}
  border-radius: 3px;
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  background-color: ${theme('colors.light')};
  border-bottom: 1px solid ${theme('colors.control')};
  border-radius: 3px 3px 0 0;
`

export const Head = styled.div`
  width: 100%;
  padding: 5px 10px;
  font-weight: bold;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
`

export const Column = styled.div`
  width: 100%;
  &:not(:last-child) {
    border-right: 1px solid ${theme('colors.control')};
  }
`

export const Cell = styled.div`
  width: 100%;
  padding: 5px 10px;
`
