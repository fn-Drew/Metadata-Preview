import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"

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
      <p class="text-semibold m-24 rounded-lg bg-[#edf9fe] p-12 text-center text-4xl shadow-md shadow-black transition-all hover:bg-[#e7f4fa] hover:text-[#1786ac] hover:shadow-sky-600">
        Drag n' drop <br /> or <br /> Click to select file
      </p>
    </div>
  )
}

export default FileInput
