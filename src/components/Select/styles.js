import styled from 'styled-components'
import { getTheme } from '../..'

export const Container = styled.div`
  font-family: ${getTheme('fonts.primary')};
  text-align: left;
  
  .react-select__container {
    height: ${getTheme('dimensions.controlHeight')};
  }

  .react-select__control {
    height: ${getTheme('dimensions.controlHeight')};
    padding: 0 5px;
    border-width: 1px;
    font-size: 16px;
    border-color: ${getTheme('colors.control')};
    background-color: #fff;
    box-shadow: none;

    &:hover {
      border-color: ${getTheme('colors.control')};
    }
  }

  .react-select__control--is-focused,
  .react-select__control--is-focused:hover {
    border-color: ${getTheme('colors.primary')};
    box-shadow: 0 0 1px ${getTheme('colors.primary')};
  }

  .react-select__placeholder {
    color: ${getTheme('colors.placeholder')};
  }
  
  .react-select__option {
    font-size: 14px;
    cursor: pointer;
  }
 
  .react-select__option--is-selected {
    background-color: ${getTheme('colors.primary')};
  }
`
