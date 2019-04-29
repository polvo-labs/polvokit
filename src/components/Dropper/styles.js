import styled from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import { getTheme } from '../..'

export const Container = styled.div`
  position: relative;

  &::after {
    content: "${prop('label')}";
    position: absolute;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    top: -2px;
    left: -2px;
    width: 100%;
    height: 100%;
    border: 3px dashed ${getTheme('colors.primary')};
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.8);
    display: ${ifProp('dragging', 'flex', 'none')};
  }
`
