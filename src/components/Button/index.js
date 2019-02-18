import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import theme from '../../theme'
import { ButtonStyled, Before, After, Loading } from './styles'

function Button ({ before, after, children, loading, ...props }) {
  return (
    <ButtonStyled {...props}>
      {loading ? (
        <Loading>
          <Icon icon='spinner' spin />
        </Loading>
      ) : (
        <>
          {before && <Before>{before}</Before>}
          {children}
          {after && <After>{after}</After>}
        </>
      )}
    </ButtonStyled>
  )
}

Button.propTypes = {
  /** Appearance */
  appearance: PropTypes.oneOf(Object.keys(theme.colors)),

  /** Before */
  before: PropTypes.element,

  /** After */
  after: PropTypes.element,

  /** Loading state */
  loading: PropTypes.bool,

  /** Fill button width */
  fill: PropTypes.bool,

  /** Fill button at certain breakpoint */
  fillAt: PropTypes.oneOf(Object.keys(theme.breakpoints))
}

Button.defaultProps = {
  appearance: 'default',
  loading: false,
  fill: false
}

Button.Anchor = function ButtonAnchor (props) {
  return <Button as='a' {...props} />
}

Button.Link = function ButtonLink (props) {
  return <Button as={Link} {...props} />
}

export default Button
