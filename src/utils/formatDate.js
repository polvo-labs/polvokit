import { format } from 'date-fns'

export default function formatDate (date) {
  if (!date) {
    return ''
  }

  return format(date, 'DD/MM/YYYY')
}
