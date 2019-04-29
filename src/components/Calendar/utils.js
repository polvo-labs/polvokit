import { useMemo } from 'react'
import { useConfig } from '../..'
import {
  setDate,
  getDay,
  subDays,
  addDays,
  getDaysInMonth,
  eachDay,
  isSameMonth,
  isToday
} from 'date-fns'

export function makeDays (displayDate) {
  const selectedDate = setDate(displayDate, 1)
  const daysInMonth = getDaysInMonth(displayDate)
  const weekday = getDay(selectedDate)
  const startDate = subDays(selectedDate, weekday)
  const days = Math.ceil((weekday + daysInMonth) / 7) * 7 - 1
  const endDate = addDays(startDate, days)

  return eachDay(startDate, endDate).map(date => ({
    id: date.toString(),
    date,
    isToday: isToday(date),
    isAdjacentMonth: !isSameMonth(displayDate, date)
  }))
}

export function useMessages () {
  return {
    months: useConfig({ id: 'messages.months' }),
    weekdays: useConfig({ id: 'messages.weekdays' }),
    previousMonth: useConfig({ id: 'messages.previousMonth' }),
    nextMonth: useConfig({ id: 'messages.nextMonth' })
  }
}
