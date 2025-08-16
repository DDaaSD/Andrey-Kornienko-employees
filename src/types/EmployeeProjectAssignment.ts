export type EmployeeProjectAssignment = {
    empId: string
    projectId: string
    dateFrom: string
    dateTo: string | null
}

export type EmployeeProjectAssigmentGroupedByProject = { [key: string]: EmployeeProjectAssignment[] }
