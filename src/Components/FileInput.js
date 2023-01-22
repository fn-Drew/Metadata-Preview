import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Upload32 } from "@carbon/icons-react"
import ClipLoader from "react-spinners/ClipLoader"

function FileInput({ setJsonMetadata, loading, setLoading, setRawJson }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.addEventListener('loadstart', () => {
        setLoading(false)
        console.log('Loading set to False')
      })
      reader.addEventListener('loadend', () => {
        setLoading(true)
        console.log('Loading set to True')
      })

      reader.onload = () => {
        console.log('File Uploaded')
        const binaryStr = reader.result
        setJsonMetadata(JSON.parse(binaryStr))
        setRawJson((binaryStr))
      }
      reader.readAsText(file)
    })
  }, [setJsonMetadata, setLoading, setRawJson])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="flex row-span-5  content-center text-center justify-center" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <div className="flex shadow-lg w-full py-10 hover:shadow-blue-300 active:shadow-blue-600 text-accent-blue flex-col gap-4 place-items-center resize-y border-[1px] border-solid rounded-b-lg border-accent-blue bg-background-blue">
            <Upload32 className="animate-[spin_1s_ease-in-out_1]" />
            <p className="text-2xl text-[#a3aab6]">
              Drop your file!
            </p>
          </div>
          :
          <div className="flex shadow-inner w-full py-10 hover:shadow-blue-300 active:shadow-blue-600 text-accent-blue flex-col gap-4 place-items-center resize-y border-[1px] border-solid rounded-b-lg border-accent-blue bg-background-blue">
            <Upload32 />
            <p className="text-2xl text-[#a3aab6]">
              Drag & Drop JSON
            </p>
          </div>
      }
      {
        (loading) ?
          null :
          <ClipLoader loading={loading} size={150} />
      }
    </div>
  )
}

export default FileInput