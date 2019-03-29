import React, { useState, useEffect, useMemo } from 'react'
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
    formatWeekday,
    isDaySelectable,
    isDayWithinRange
  } = props

  const [ displayDate, setDisplayDate ] = useState(value || new Date())
  const [ hoveredDate, setHoveredDate ] = useState(null)

  useEffect(() => {
    if (value && !isSameMonth(displayDate, value)) {
      setDisplayDate(value)
    }
  }, [value])

  const days = useMemo(
    () => {
      console.log('generate days')
      return utils.makeDays(displayDate)
    },
    [displayDate]
  )

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
        {days.map(date => {
          const isDisabled = !isDaySelectable(date)
          return (
            <Cell
              key={date.toString()}
              active={isDayWithinRange(date, hoveredDate)}
              onMouseEnter={() => {
                setHoveredDate(date)
              }}
              onMouseLeave={() => {
                setHoveredDate(null)
              }}
            >
              <Day
                isAdjacentMonth={!isSameMonth(displayDate, date)}
                isToday={isToday(date)}
                isSelected={isSameDay(date, value)}
                isDisabled={isDisabled}
                onClick={() => {
                  if (isDisabled) {
                    return
                  }

                  if (!isSameDay(date, value)) {
                    onChange(date)
                  }
                }}
              >
                {date.getDate()}
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

  /** Weekday formatter */
  formatWeekday: PropTypes.func,

  /** Header display formatter */
  formatHeaderDisplay: PropTypes.func,

  /** Whether the day is selectable */
  isDaySelectable: PropTypes.func,

  /** Whether the day in within a range */
  isDayWithinRange: PropTypes.func
}

Calendar.defaultProps = {
  value: null,
  onChange: () => null,
  isDaySelectable: date => true,
  formatWeekday: utils.formatWeekday,
  formatHeaderDisplay: date =>
    `${utils.formatMonth(date)} - ${date.getFullYear()}`,
  isDayWithinRange: date => false
}

export default Calendar
