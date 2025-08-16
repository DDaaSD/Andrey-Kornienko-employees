import styled from 'styled-components'
import { useRef, type ChangeEvent, type FC } from 'react'

interface UploadButtonProps {
    onFilesSelected: (files: FileList) => void
    accept?: string
    loading?: boolean
}

const Button = styled.button<{ $loading?: boolean }>`
    padding: 10px 20px;
    border: 2px dashed #4b5563;
    border-radius: 8px;
    background: #1f2937;
    color: #f9fafb;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
        border-color: #3b82f6;
        background: #374151;
    }

    &:active {
        background: #111827;
        border-color: #2563eb;
    }

    ${({ $loading }) =>
    $loading &&
            `
    cursor: not-allowed;
    opacity: 0.7;
  `}
`

export const FileUploadButton: FC<UploadButtonProps> = ({ onFilesSelected, accept, loading }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(e.target.files)
      e.target.value = ''
    }
  }

  const handleClick = () => {
    if (!loading) fileInputRef.current?.click()
  }

  return (
    <>
      <Button type="button" onClick={handleClick} $loading={loading}>
        {loading ? 'Uploading...' : 'Select File'}
      </Button>
      <input
        type="file"
        accept={accept}
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleChange}
        disabled={loading}
      />
    </>
  )
}
