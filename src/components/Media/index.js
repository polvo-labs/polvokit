import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import ReactMedia from 'react-media'
import objectPath from 'object-path'
import isFunction from 'is-function'
import theme from '../../theme'

export default function Media ({ query, ...props }) {
  return (
    <ThemeConsumer>
      {themeObject => {
        const breakpoints = {
          ...theme.breakpoints,
          ...objectPath.get(themeObject, 'polvokit.breakpoints')
        }

        return (
          <ReactMedia
            query={isFunction(query) ? query(breakpoints) : query}
            {...props}
          />
        )
      }}
    </ThemeConsumer>
  )
}

Media.propTypes = {
  /** A common CSS media query. It can be a string or a function receives the breakpoints as argument and returns a string */
  query: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.func
  ]).isRequired
}
