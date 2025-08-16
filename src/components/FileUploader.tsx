// FileUploader.tsx
import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'

type Props = {
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    onFilesSelected?: (files: FileList) => void;
};

const HiddenInput = styled.input.attrs({ type: 'file' })`
  display: none;
`

const DropArea = styled.div<{ isDragging: boolean; disabled?: boolean }>`
  border: 2px dashed #6b7280;
  border-radius: 14px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;

  ${(p) =>
    p.isDragging &&
    css`
      background: rgba(59, 130, 246, 0.1);
      border-color: #3b82f6;
    `}

  ${(p) =>
    p.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`

const UploadText = styled.p`
  margin: 0.5rem 0 0;
  color: #374151;
    
    font-size: 0.95rem;
`

export default function FileUploader({
  accept,
  multiple = false,
  disabled = false,
  onFilesSelected,
}: Readonly<Props>) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFiles = (files: FileList) => {
    if (files.length > 0) {
      onFilesSelected?.(files)
    }
  }

  const handleClick = () => {
    if (!disabled) inputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files)

      e.target.value = '' // allow re-uploading same file
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (!disabled && e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files)
    }
  }

  return (
    <>
      <HiddenInput
        ref={inputRef}
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
      />
      <DropArea
        isDragging={isDragging}
        disabled={disabled}
        onClick={handleClick}
        onDragOver={(e) => {
          e.preventDefault()
          if (!disabled) setIsDragging(true)
        }}
        onDragLeave={(e) => {
          e.preventDefault()
          setIsDragging(false)
        }}
        onDrop={handleDrop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4-4-4 4m4-4v12"
          />
        </svg>
        <UploadText>
          {disabled
            ? 'File upload disabled'
            : 'Drag & drop files here, or click to select'}
        </UploadText>
      </DropArea>
    </>
  )
}
