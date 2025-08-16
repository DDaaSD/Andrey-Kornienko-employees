import './App.css'
import {FileUploadButton} from './components/FileUploadButton.tsx'
import {useAsync} from './hooks/useAsync.ts'
import {parseCSV} from './utils/parseCSV.ts'
import {TableEmployeeAssignment} from './components/TableEmployeeAssignment.tsx'
import styled from 'styled-components'
import {useMemo} from 'react'
import {groupByProject} from './utils/groupByProject.ts'
import {getEmployeeCollaboration} from './utils/getEmployeeCollaboration.ts'
import {sortBy} from './utils/sortBy.ts'


function App() {
  const { data = [], refetch, isLoading} = useAsync(parseCSV)

  const collaborations = useMemo(() => {
    const groupedByProject = groupByProject(data)
    const collaborations = getEmployeeCollaboration(groupedByProject)
    return sortBy(collaborations, 'daysWorked', 'desc')
  }, [data])

  const onFilesSelected = (file: FileList) => {
    if(file.length === 0) {
      return
    }
    refetch(file[0])
  }

  return (
    <TopLeftContainer>
      <FileUploadButton
        onFilesSelected={onFilesSelected}
        loading={isLoading}
        accept={'.csv'}/>
      <TableEmployeeAssignment data={collaborations} />
    </TopLeftContainer>
  )
}

export const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  gap: 10px;
`

export default App
