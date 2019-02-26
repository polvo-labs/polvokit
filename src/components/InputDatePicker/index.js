import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'
import Calendar from '../Calendar'
import Icon from '../Icon'
import formatDate from '../../utils/formatDate'
import maskDate from '../../utils/maskDate'
import parseDate from '../../utils/parseDate'
import {
  Container,
  CalendarWrapper
} from './styles'

function InputDatePicker (props) {
  const {
    value,
    onChange,
    onFocus,
    onBlur,
    parse,
    format,
    mask,
    calendarProps,
    ...rest
  } = props

  const [ focused, setFocus ] = useState(false)
  const [ inputValue, setInputValue ] = useState(
    format(value)
  )

  return (
    <Container
      onFocus={e => {
        setFocus(true)
        onFocus(e)
      }}
      onBlur={e => {
        setFocus(false)
        onBlur(e)
      }}
    >
      <Input
        before={<Icon icon='calendar' />}
        value={mask(inputValue)}
        focused={focused}
        onFocus={e => e.target.select()}
        onChange={e => {
          setInputValue(e.target.value)

          const parsedValue = parse(e.target.value)

          if (parsedValue) {
            onChange(parsedValue)
          }

          if (!e.target.value) {
            onChange(null)
          }
        }}
        {...rest}
      />
      <CalendarWrapper show={focused}>
        <Calendar
          value={value}
          onChange={date => {
            onChange(date)
            setInputValue(format(date))
          }}
          {...calendarProps}
        />
      </CalendarWrapper>
    </Container>
  )
}

InputDatePicker.propTypes = {
  /** Value */
  value: PropTypes.instanceOf(Date),

  /** Change handler */
  onChange: PropTypes.func.isRequired,

  /** Function to parse input value */
  parse: PropTypes.func,

  /** Function to format a Date */
  format: PropTypes.func,

  /** Function to mask input value */
  mask: PropTypes.func,

  /** Calendar props */
  calendarProps: PropTypes.object
}

InputDatePicker.defaultProps = {
  format: formatDate,
  parse: parseDate,
  mask: maskDate,
  onFocus: () => null,
  onBlur: () => null
}

export default InputDatePicker
