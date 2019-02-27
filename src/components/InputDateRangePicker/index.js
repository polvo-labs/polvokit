import React from 'react'
import PropTypes from 'prop-types'
import objectPath from 'object-path'
import { isBefore, isAfter, isSameDay } from 'date-fns'
import InputDatePicker from '../InputDatePicker'
import { Container } from './styles'
import formatDate from '../../utils/formatDate'
import parseDate from '../../utils/parseDate'
import maskDate from '../../utils/maskDate'

function InputDateRangePicker (props) {
  const {
    value,
    onChange,
    calendarProps,
    inputStartProps,
    inputEndProps,
    ...rest
  } = props

  const start = objectPath.get(value, 'start')
  const end = objectPath.get(value, 'end')

  const isValidStart = date => {
    if (!end) {
      return true
    }

    return isBeforeOrEqual(date, end)
  }

  const isValidEnd = date => {
    if (!start) {
      return true
    }

    return isAfterOrEqual(date, start)
  }

  return (
    <Container>
      <InputDatePicker
        value={start}
        onChange={date => {
          isValidStart(date) && onChange({
            start: date,
            end
          })
        }}
        calendarProps={{
          isDaySelectable: isValidStart,
          isDayWithinRange: checkRangeStart(start, end),
          ...calendarProps
        }}
        {...inputStartProps}
        {...rest}
      />
      <InputDatePicker
        value={end}
        onChange={date => {
          isValidEnd(date) && onChange({
            start,
            end: date
          })
        }}
        calendarProps={{
          isDaySelectable: isValidEnd,
          isDayWithinRange: checkRangeEnd(start, end),
          ...calendarProps
        }}
        {...inputEndProps}
        {...rest}
      />
    </Container>
  )
}

InputDateRangePicker.propTypes = {
  /** Value */
  value: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date)
  }),

  /** Change handler */
  onChange: PropTypes.func.isRequired,

  /** Function to parse input value */
  parse: PropTypes.func,

  /** Function to format a Date */
  format: PropTypes.func,

  /** Function to mask input value */
  mask: PropTypes.func,

  /** Calendar props */
  calendarProps: PropTypes.object,

  /** Input start props */
  inputStartProps: PropTypes.object,

  /** Input end props */
  inputEndProps: PropTypes.object
}

InputDateRangePicker.defaultProps = {
  format: formatDate,
  parse: parseDate,
  mask: maskDate,
  onFocus: () => null,
  onBlur: () => null
}

export default InputDateRangePicker

const isAfterOrEqual = (date1, date2) =>
  isAfter(date1, date2) ||
  isSameDay(date1, date2)

const isBeforeOrEqual = (date1, date2) =>
  isBefore(date1, date2) ||
  isSameDay(date1, date2)

const checkRangeEnd = (start, end) => (date, hoveredDate) => {
  if (isSameDay(date, start)) {
    return true
  }

  if (start) {
    if (hoveredDate) {
      const result = isAfterOrEqual(date, start) &&
        isBeforeOrEqual(date, hoveredDate)

      if (result) {
        return true
      }
    }

    if (end) {
      return isAfterOrEqual(date, start) &&
        isBeforeOrEqual(date, end)
    }
  }

  return false
}

const checkRangeStart = (start, end) => (date, hoveredDate) => {
  if (isSameDay(date, end)) {
    return true
  }

  if (end) {
    if (hoveredDate) {
      const result = isBeforeOrEqual(date, end) &&
        isAfterOrEqual(date, hoveredDate)

      if (result) {
        return true
      }
    }

    if (start) {
      return isBeforeOrEqual(date, end) &&
        isAfterOrEqual(date, start)
    }
  }

  return false
}
