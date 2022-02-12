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
      <p class="transition-all hover:text-[#1786ac] text-semibold p-12 text-center hover:shadow-sky-600 hover:bg-[#e7f4fa] bg-[#edf9fe] m-24 text-4xl rounded-lg shadow-md shadow-black">Drag n' drop <br /> or <br /> Click to select file</p>
    </div>
  )
}

export default FileInput 