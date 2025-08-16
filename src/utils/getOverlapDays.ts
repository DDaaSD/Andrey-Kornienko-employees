import type {EmployeeProjectAssignment} from '../types/EmployeeProjectAssignment.ts'
import {parseDateOrToday} from './parseDateOrToday.ts'

const millisecondsInDay = 1000 * 60 * 60 * 24

export const getOverlapDays = (firstEmployee: EmployeeProjectAssignment, secondEmployee: EmployeeProjectAssignment): number => {
  const {dateFrom: firstDateFrom, dateTo: firstDateTo} = firstEmployee
  const {dateFrom: secondDateFrom, dateTo: secondDateTo} = secondEmployee

  const firstFrom = new Date(firstDateFrom)
  const firstTo = parseDateOrToday(firstDateTo)
  const secondFrom = new Date(secondDateFrom)
  const secondTo = parseDateOrToday(secondDateTo)

  // Calculate the overlap period
  const overlapStart = new Date(Math.max(firstFrom.getTime(), secondFrom.getTime()))
  const overlapEnd = new Date(Math.min(firstTo.getTime(), secondTo.getTime()))

  // If there's no overlap, return 0
  if (overlapStart >= overlapEnd) {
    return 0
  }

  // Calculate the number of overlapping days
  const diffTime = overlapEnd.getTime() - overlapStart.getTime()
  return Math.ceil(diffTime / millisecondsInDay) + 1 // +1 to include both start and end days
}
