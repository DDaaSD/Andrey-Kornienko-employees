export const parseDateOrToday = (date: string | null): Date => {
  if (!date) return new Date() // if null, return today
  const parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) {
    return new Date()
  }
  return parsedDate

}
