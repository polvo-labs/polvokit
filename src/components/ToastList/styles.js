import styled from 'styled-components'
import posed from 'react-pose'

const Box = posed.div({
  draggable: 'x',
  dragBounds: {
    left: '-50%',
    right: '50%'
  },
  enter: {
    opacity: 1,
    top: props => props.top
  },
  exit: {
    opacity: 0,
    left: '50%'
  }
})

export const Item = styled(Box)`
  position: absolute;
  top: -100%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
`
