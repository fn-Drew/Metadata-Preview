import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function FileInput({ setRawJsonInput }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        setRawJsonInput(JSON.parse(binaryStr))
      }
      reader.readAsText(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p class="p-12 hover:shadow-blue-500 transition-all bg-[#edf9fe] m-24 text-xl rounded-lg shadow-md shadow-black">Drag n' drop or click to select file</p>
    </div>
  )
}

export default FileInput 