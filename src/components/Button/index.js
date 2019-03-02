import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import theme from '../../theme'
import filterProps from '../../utils/filterProps'
import { ButtonStyled, Before, After, Loading } from './styles'

function Button ({ before, after, children, loading, ...props }) {
  return (
    <ButtonStyled {...props}>
      {loading ? (
        <Loading>
          <Icon icon='spinner' spin />
        </Loading>
      ) : (
        <React.Fragment>
          {before && <Before>{before}</Before>}
          {children}
          {after && <After>{after}</After>}
        </React.Fragment>
      )}
    </ButtonStyled>
  )
}

Button.propTypes = {
  /** Appearance */
  appearance: PropTypes.oneOf(Object.keys(theme.colors)),

  /** Size */
  size: PropTypes.oneOf([
    'small',
    'default',
    'large'
  ]),

  /** Before */
  before: PropTypes.element,

  /** After */
  after: PropTypes.element,

  /** Loading state */
  loading: PropTypes.bool,

  /** Full button width */
  full: PropTypes.bool,

  /** Full button at certain breakpoint */
  fullAt: PropTypes.oneOf(Object.keys(theme.breakpoints)),

  /** Outline buttons */
  outline: PropTypes.bool,
}

Button.defaultProps = {
  appearance: 'default',
  size: 'default',
  loading: false,
  full: false,
  outline: false
}

Button.Anchor = function ButtonAnchor (props) {
  return <Button as='a' {...props} />
}

const FilteredLink = props =>
  <Link {...filterProps(props, Button.propTypes)} />

Button.Link = function ButtonLink (props) {
  return (
    <Button
      as={FilteredLink}
      {...props}
    />
  )
}

export default Button
