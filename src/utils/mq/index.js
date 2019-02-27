import { css } from 'styled-components'
import objectPath from 'object-path'
import { theme } from '../..'

export default {
  above: (bp, style) => props =>
    css`
      @media screen and (min-width: ${getBp(bp, props)}) {
        ${style}
      }
    `,
  between: (min, max, style) => props =>
    css`
      @media screen and (min-width: ${getBp(min, props)}) and (max-width: ${getBp(max, props)}) {
        ${style}
      }
    `,
  below: (bp, style) => props =>
    css`
      @media screen and (max-width: ${getBp(bp, props)}) {
        ${style}
      }
    `
}

const getBp = (bp, props) =>
  objectPath.get(
    props.theme.breakpoints || theme.breakpoints,
    bp,
    bp
  )
