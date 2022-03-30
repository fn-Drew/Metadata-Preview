import Editor from "@monaco-editor/react"
import loader from "@monaco-editor/loader";

const RawJsonInput = ({ rawJson, setRawJson, setJsonMetadata }) => {

  // to disable minimap; not functional yet 

  // loader.init().then(monaco => {
  //   console.log('aorisetnaoirsetn')
  //   monaco.editor.create(document.getElementById("container"), {
  //     value: rawJson,
  //     language: "json",
  //     theme: "vs-dark",
  //     automaticLayout: true,
  //     minimap: {
  //       enabled: false
  //     }
  //   })
  // });

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
      />
    </div >
  )
}

export default RawJsonInput