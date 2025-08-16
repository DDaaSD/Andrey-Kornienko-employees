export const parseDateOrToday = (date: string | null): Date => {
  return date ? new Date(date) : new Date()
}
