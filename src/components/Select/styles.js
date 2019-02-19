import styled from 'styled-components/macro'
import theme from '../../utils/theme'

export const Container = styled.div`
  font-family: ${theme('fonts.primary')};
  text-align: left;
  
  .react-select__container {
    height: ${theme('dimensions.inputHeight')};
  }

  .react-select__control {
    height: ${theme('dimensions.inputHeight')};
    padding: 0 5px;
    border-width: 1px;
    font-size: 16px;
    border-color: ${theme('colors.control')};
    background-color: #fff;
    box-shadow: none;

    &:hover {
      border-color: ${theme('colors.control')};
    }
  }

  .react-select__control.--is-focused {
      border-color: ${theme('colors.primary')};
      box-shadow: none;
    }

  .react-select__placeholder {
    color: ${theme('colors.placeholder')};
  }
  
  .react-select__option {
    font-size: 14px;
    cursor: pointer;
  }
 
  .react-select__option--is-selected {
    background-color: ${theme('colors.primary')};
  }
`
