import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  isSameMonth,
  isToday,
  isSameDay,
  addMonths
} from 'date-fns'
import * as utils from './utils'
import Icon from '../Icon'
import {
  Container,
  Header,
  HeaderButton,
  HeaderInfo,
  Weekdays,
  Weekday,
  Grid,
  Cell,
  Day
} from './styles'

function Calendar (props) {
  const {
    value,
    onChange,
    formatHeaderDisplay,
    formatWeekday
  } = props

  const [ displayDate, setDisplayDate ] = useState(value || new Date())
  const days = utils.makeDays(displayDate)

  return (
    <Container>
      <Header>
        <HeaderButton
          title='Previous month'
          onClick={() => setDisplayDate(addMonths(displayDate, -1))}
        >
          <Icon icon='chevron-left' />
        </HeaderButton>
        <HeaderInfo>
          {formatHeaderDisplay(displayDate, props)}
        </HeaderInfo>
        <HeaderButton
          title='Next month'
          onClick={() => setDisplayDate(addMonths(displayDate, 1))}
        >
          <Icon icon='chevron-right' />
        </HeaderButton>
      </Header>
      <Weekdays>
        {[0, 1, 2, 3, 4, 5, 6].map(weekday => (
          <Weekday key={weekday}>
            {formatWeekday(weekday)}
          </Weekday>
        ))}
      </Weekdays>
      <Grid>
        {days.map(date => (
          <Cell key={date.toString()}>
            <Day
              isAdjacentMonth={!isSameMonth(displayDate, date)}
              isToday={isToday(date)}
              isSelected={isSameDay(date, value)}
              onClick={() => {
                !isSameDay(date, value) && onChange(date)
              }}
            >
              {date.getDate()}
            </Day>
          </Cell>
        ))}
      </Grid>
    </Container>
  )
}

Calendar.propTypes = {
  /** Selected Date */
  value: PropTypes.instanceOf(Date),

  /** Change handler */
  onChange: PropTypes.func,

  /** Weekday formatter */
  formatWeekday: PropTypes.func,

  /** Header display formatter */
  formatHeaderDisplay: PropTypes.func
}

Calendar.defaultProps = {
  value: null,
  onChange: () => null,
  formatWeekday: utils.formatWeekday,
  formatHeaderDisplay: date =>
    `${utils.formatMonth(date)} - ${date.getFullYear()}`
}

export default Calendar
