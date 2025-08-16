import type {EmployeeProjectAssignment} from '../types/EmployeeProjectAssignment.ts'

export const parseTextToEmployeeAssignments = (text: string): EmployeeProjectAssignment[] => {
  const lines = text
    .split(/\r?\n/)
    .slice(1)
    .map(line => line.trim())
    .filter(Boolean)


  return lines.map(line => {
    const [empId, projectId, dateFrom, dateTo] = line.split(',')

    return {
      empId: empId,
      projectId: projectId,
      dateFrom: dateFrom.trim(),
      dateTo: dateTo ? dateTo.trim() : null
    }
  })

}
