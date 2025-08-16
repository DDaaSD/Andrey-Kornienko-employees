import type {
  EmployeeProjectAssigmentGroupedByProject,
  EmployeeProjectAssignment
} from '../types/EmployeeProjectAssignment.ts'

export const groupByProject = (employeeAssignments: EmployeeProjectAssignment[]):EmployeeProjectAssigmentGroupedByProject => {
  const grouped: EmployeeProjectAssigmentGroupedByProject = {}

  for (const assignment of employeeAssignments) {
    const { projectId } = assignment

    if (!grouped[projectId]) {
      grouped[projectId] = []
    }

    grouped[projectId].push(assignment)
  }

  return grouped
}
