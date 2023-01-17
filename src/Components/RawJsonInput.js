import Editor from "@monaco-editor/react"
import { SpinnerSmall } from "./Spinners"

const RawJsonInput = ({ rawJson, setRawJson, setJsonMetadata }) => {

  return (
    <div className="row-span-9 h-[20vh] w-11/12">
      <Editor
        className="font-mono string-input"
        placeholder="Input Metadata..."
        defaultLanguage="json"

        // for some reason, this works, but using setJsonMetadata doesn't
        onChange={(event) => {
          setRawJson(event)
          setJsonMetadata(JSON.parse(event))
        }}
        value={rawJson}
        loading={<SpinnerSmall />}
      />
    </div >
  )
}

export default RawJsonInput