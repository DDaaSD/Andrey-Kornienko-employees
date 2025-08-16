import type {EmployeeProjectAssignment} from '../types/EmployeeProjectAssignment.ts'
import {parseTextToEmployeeAssignments} from './parseTextToEmployeeAssignments.ts'

export const parseCSV = (file: File):  Promise<EmployeeProjectAssignment[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = e => {
      const text = e.target?.result as string
      if (!text) {
        resolve([])
        return
      }
      const data = parseTextToEmployeeAssignments(text)

      resolve(data)
    }

    reader.onerror = () => reject(reader.error)
    reader.readAsText(file)
  })
}
