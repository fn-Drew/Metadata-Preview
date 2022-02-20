import { useEffect, useState } from "react"
import { Awaitable } from "../Awaitable"
import ClipLoader from "react-spinners/ClipLoader"

const Media = ({ userInput, loading }) => {

  if (!userInput.hasOwnProperty("image"))
    return (
      <div className="flex flex-col place-items-center gap-14">
        <div className="pt-8 text-center text-3xl"> Your NFT #00 </div>
        <img alt="" className="w-1/3 shadow-lg" src='https://ipfs.io/ipfs/QmNctds8VQKxnZ5K4onxoAnUY1adsoPnbUgsKFDAPw294k' />
      </div>
    )

  let nftPicture = userInput.image

  if (nftPicture.substring(0, 7) === "ipfs://") {
    nftPicture = `https://ipfs.io/ipfs/${nftPicture.slice(7)}`
  }

  return (
    <div className="flex flex-col place-items-center gap-14">
      <div className="pt-8 text-center text-3xl"> {userInput.name} </div>
      {
        (!loading) ?
          <img alt="" className="w-1/3 shadow-lg" src={nftPicture} /> :
          <ClipLoader loading={loading} size={50} />
      }
    </div>
  )
}

export default Media
