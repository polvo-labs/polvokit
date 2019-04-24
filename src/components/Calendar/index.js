import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import {
  isSameMonth,
  isSameDay,
  addMonths
} from 'date-fns'
import * as utils from './utils'
import { Icon } from '../..'
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
    isDaySelectable,
    isDayWithinRange
  } = props

  const messages = utils.useMessages()

  const [ displayDate, setDisplayDate ] = useState(value || new Date())
  const [ hoveredDate, setHoveredDate ] = useState(null)

  useEffect(() => {
    if (value && !isSameMonth(displayDate, value)) {
      setDisplayDate(value)
    }
  }, [value])

  const days = useMemo(
    () => {
      return utils.makeDays(displayDate)
    },
    [displayDate]
  )

  return (
    <Container>
      <Header>
        <HeaderButton
          title={messages.previousMonth}
          onClick={() => setDisplayDate(addMonths(displayDate, -1))}
        >
          <Icon icon='chevron-left' />
        </HeaderButton>
        <HeaderInfo>
          {messages.months[displayDate.getMonth()]}
        </HeaderInfo>
        <HeaderButton
          title={messages.nextMonth}
          onClick={() => setDisplayDate(addMonths(displayDate, 1))}
        >
          <Icon icon='chevron-right' />
        </HeaderButton>
      </Header>
      <Weekdays>
        {[0, 1, 2, 3, 4, 5, 6].map(weekday => (
          <Weekday key={weekday}>
            {messages.weekdays[weekday]}
          </Weekday>
        ))}
      </Weekdays>
      <Grid>
        {days.map(day => {
          const isDisabled = !isDaySelectable(day.date)
          return (
            <Cell
              key={day.id}
              active={isDayWithinRange(day.date, hoveredDate)}
              onMouseEnter={() => {
                setHoveredDate(day.date)
              }}
              onMouseLeave={() => {
                setHoveredDate(null)
              }}
            >
              <Day
                isAdjacentMonth={day.isAdjacentMonth}
                isToday={day.isToday}
                isSelected={isSameDay(day.date, value)}
                isDisabled={isDisabled}
                onClick={() => {
                  if (isDisabled) {
                    return
                  }

                  if (!isSameDay(day.date, value)) {
                    onChange(day.date)
                  }
                }}
              >
                {day.date.getDate()}
              </Day>
            </Cell>
          )
        })}
      </Grid>
    </Container>
  )
}

Calendar.propTypes = {
  /** Selected Date */
  value: PropTypes.instanceOf(Date),

  /** Change handler */
  onChange: PropTypes.func,

  /** Whether the day is selectable */
  isDaySelectable: PropTypes.func,

  /** Whether the day in within a range */
  isDayWithinRange: PropTypes.func
}

Calendar.defaultProps = {
  value: null,
  onChange: () => null,
  isDaySelectable: date => true,
  isDayWithinRange: date => false
}

export default Calendar
