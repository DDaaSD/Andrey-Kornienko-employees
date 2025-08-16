import styled from 'styled-components'
import type {FC} from 'react'

interface DataTableProps {
    data: Record<string, any>[]
}

const Table = styled.table`
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

export const DataTable: FC<DataTableProps> = ({ data }) => {
  if (!data.length) return null

  const columns = Object.keys(data[0])

  return (
    <Table>
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
            {columns.map(col => (
              <Td key={col}>{row[col]}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
