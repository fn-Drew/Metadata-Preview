import { useEffect } from "react"

const IpfsInput = ({ ipfsInput, setIpfsInput, setJsonMetadata, setLoading, handleStringToJson, setRawJson }) => {

  if (Object.prototype.toString.call(ipfsInput) === "[object String]" && ipfsInput.substring(0, 7) === "ipfs://") {
    setIpfsInput(`https://heartnfts.mypinata.cloud/ipfs/${ipfsInput.slice(7)}`)
  }

  const hook = () => {
    if (!ipfsInput) return null
    fetch(ipfsInput)
      .then(response => response.json())
      .then((data) => {
        setJsonMetadata(data)
        setRawJson(JSON.stringify(data, null, 4))
      })
  }
  useEffect(hook, [ipfsInput])

  const handleIpfsInput = (event) => {
    setIpfsInput(event.target.value)
    setLoading(true)
    handleStringToJson(event)
  }

  return (
    <div className="row-span-5 w-11/12">
      <textarea
        className="string-input"
        rows="5"
        value={ipfsInput}
        onInput={handleIpfsInput}
        placeholder="Input IPFS link..."
      />
    </div >
  )
}

export default IpfsInput