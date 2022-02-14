import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload32 } from "@carbon/icons-react"

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
    <div class="flex content-center justify-center" {...getRootProps()}>
      <input {...getInputProps()} />
      <div class="flex p-8 bg-[#edf9fe] my-10 content-center justify-center border-[1px] border-solid border-[#69cdee] w-1/2">
        <Upload32 class="" />
      </div>
    </div>
  )
}

export default FileInput
