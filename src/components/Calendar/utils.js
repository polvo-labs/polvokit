import {
  setDate,
  getDay,
  subDays,
  addDays,
  getDaysInMonth,
  eachDay,
  setDay
} from 'date-fns'

export function makeDays (date) {
  const selectedDate = setDate(date, 1)
  const daysInMonth = getDaysInMonth(date)
  const weekday = getDay(selectedDate)
  const startDate = subDays(selectedDate, weekday)
  const days = Math.ceil((weekday + daysInMonth) / 7) * 7 - 1
  const endDate = addDays(startDate, days)

  return eachDay(startDate, endDate)
}

const weekdayFormat = new window.Intl.DateTimeFormat(
  undefined,
  {
    weekday: 'short'
  }
)

export function formatWeekday (weekday) {
  const date = setDay(new Date(), weekday)
  return weekdayFormat.format(date)
}

const monthFormat = new window.Intl.DateTimeFormat(
  undefined,
  {
    month: 'long'
  }
)

export function formatMonth (date) {
  return monthFormat.format(date)
}
