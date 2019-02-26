import React from 'react'
import PropTypes from 'prop-types'
import objectPath from 'object-path'
import { isBefore, isAfter } from 'date-fns'
import InputDatePicker from '../InputDatePicker'
import { Container } from './styles'
import formatDate from 'src/utils/formatDate'
import parseDate from 'src/utils/parseDate'
import maskDate from 'src/utils/maskDate'

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

    return isBefore(date, end)
  }

  const isValidEnd = date => {
    if (!start) {
      return true
    }

    return isAfter(date, start)
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
