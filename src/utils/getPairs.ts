import type {EmployeeProjectAssignment} from '../types/EmployeeProjectAssignment.ts'
import type {EmployeeCollaboration} from '../types/EmployeeCollaboration.ts'
import {getOverlapDays} from './getOverlapDays.ts'

export const getPairs = (employees: EmployeeProjectAssignment[]): EmployeeCollaboration[] => {
  const pairs: EmployeeCollaboration[] = []

  for (let i = 0; i < employees.length - 1; i++) {
    for(let j = i + 1; j < employees.length; j++) {
      const firstEmployee = employees[i]
      const secondEmployee = employees[j]

      pairs.push({
        firstEmployeeId: firstEmployee.empId,
        secondEmployeeId: secondEmployee.empId,
        projectId: firstEmployee.projectId,
        daysWorked: getOverlapDays(firstEmployee, secondEmployee)
      })
    }

  }

  return pairs
}
