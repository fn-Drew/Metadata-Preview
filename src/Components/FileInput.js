import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload32 } from "@carbon/icons-react"

function FileInput({ setRawJsonInput }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        const binaryStr = reader.result
        setRawJsonInput(JSON.parse(binaryStr))
      }
      reader.readAsText(file)
    })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div class="flex content-center text-center justify-center" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <div class="h-full w-2/3 py-20 my-12 flex rounded-md justify-center shadow-sky-200 shadow-xl bg-[#edf9fe] border-dotted text-[#5fbbda] border-[#69cdee] border-2 outline-4 ring-8 ring-offset-8 ring-[#edf9fe] ring-offset-white ">
            <Upload32 class="" />
          </div>
          :
          <div class="h-full w-2/3 py-20 my-12 rounded-md shadow-sky-200 shadow-lg bg-white text-[#5fbbda] outline-4 ring-8 ring-offset-8 ring-[#edf9fe] ring-offset-white ">
            Drag & Drop JSON
          </div>
      }

    </div>
  )
}

export default FileInput
