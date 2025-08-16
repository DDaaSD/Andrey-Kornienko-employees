import styled from 'styled-components'
import type {FC} from 'react'
import type {EmployeeCollaboration} from '../types/EmployeeCollaboration.ts'

interface DataTableProps {
    data: EmployeeCollaboration[]
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: #f9fafb;
`

const Th = styled.th`
  border: 1px solid #374151;
  padding: 8px;
  background: #1f2937;
`

const Td = styled.td`
  border: 1px solid #374151;
  padding: 8px;
`

const columns = [
  'First Employee ID', 'Second Employee ID', 'Project Id', 'Days Worked'
]

export const TableEmployeeAssignment: FC<DataTableProps> = ({ data }) => {
  if (!data.length) return null
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(col => (
            <Th key={col}>{col}</Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {Object.entries(row).map(([key, value]) => (
              <Td key={key}>{value}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}
