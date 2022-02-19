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
          <div class="h-full w-2/3 py-10 my-12 flex rounded-md justify-center shadow-sky-200 bg-[#edf9fe] shadow-xl border-dotted text-[#5fbbda] border-[#69cdee] border-2 outline-4 ring-8 ring-offset-8 ring-[#edf9fe] ring-offset-white ">
            <Upload32 class="h-[30%] w-[30%]" />
          </div>
          :
          <div class="flex flex-col gap-4 place-items-center h-full w-2/3 py-10 my-12 rounded-md shadow-sky-200 shadow-lg bg-white text-[#5fbbda] outline-4 ring-8 ring-offset-8 ring-[#edf9fe] ring-offset-white ">
            <Upload32 class="h-[20%] w-[20%]" />
            <p class="text-2xl">
              Drag & Drop JSON
            </p>
          </div>
      }

    </div>
  )
}

export default FileInput
