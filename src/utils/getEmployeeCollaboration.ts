import type {EmployeeProjectAssigmentGroupedByProject} from '../types/EmployeeProjectAssignment.ts'
import type {EmployeeCollaboration} from '../types/EmployeeCollaboration.ts'
import {getPairs} from './getPairs.ts'

export const getEmployeeCollaboration = (employeeAssigmentByProjects: EmployeeProjectAssigmentGroupedByProject): EmployeeCollaboration[] => {
  const collaborations: EmployeeCollaboration[] = []

  for(const employees of Object.values(employeeAssigmentByProjects)) {
    const pairs = getPairs(employees)
    collaborations.push(...pairs)
  }
  return collaborations
}
