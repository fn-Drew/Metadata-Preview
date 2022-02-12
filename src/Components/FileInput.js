import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function FileInput({ setRawJsonInput }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(JSON.parse(binaryStr))
        setRawJsonInput(JSON.parse(binaryStr))
      }
      reader.readAsText(file)
    })

  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p class="p-12 text-xl rounded-lg shadow-md shadow-black">Drag 'n' drop some files here, or click to select files</p>
    </div>
  )
}

export default FileInput 