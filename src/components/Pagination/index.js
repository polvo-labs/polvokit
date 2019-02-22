import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import {
  Container,
  Paginator,
  Button,
  Current
} from './styles'

function Pagination ({ page, total, onChange, center, format }) {
  const disablePrev = page === 1
  const disableNext = page === total

  return (
    <Container center={center}>
      <Paginator>
        <Button
          onClick={() => !disablePrev && onChange(page - 1)}
          disabled={disablePrev}
        >
          <Icon icon='chevron-left' />
        </Button>
        <Current>
          {format(page, total)}
        </Current>
        <Button
          onClick={() => !disableNext && onChange(page + 1)}
          disabled={disableNext}
        >
          <Icon icon='chevron-right' />
        </Button>
      </Paginator>
    </Container>
  )
}

Pagination.propTypes = {
  /** Current page */
  page: PropTypes.number.isRequired,

  /** Total of pages */
  total: PropTypes.number.isRequired,

  /** onChange callback */
  onChange: PropTypes.func.isRequired,

  /** Centers the pagination */
  center: PropTypes.bool,

  /** Format the display */
  format: PropTypes.func
}

Pagination.defaultProps = {
  format: (page, total) => `${page} / ${total}`,
  center: false
}

export default Pagination
