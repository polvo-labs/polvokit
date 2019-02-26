const re = /(\d\d)\/(\d\d)\/(\d{4})/

export default function parseDate (value = '') {
  const match = value.match(re)

  if (match) {
    const day = parseInt(match[1], 10)
    const month = parseInt(match[2], 10)
    const year = parseInt(match[3], 10)

    return new Date(
      year,
      month - 1,
      day
    )
  }
}
