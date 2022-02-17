const Properties = ({ userInput }) => {
  const properties = {
    image: {
      value: userInput.image,
      used: false,
      necessity: "recommended",
      description:
        "This is the URL to the image of the item. Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.",
    },
    image_data: {
      value: userInput.image_data,
      used: false,
      necessity: "none",
      description:
        "Raw SVG image data, if you want to generate images on the fly (not recommended). Only use this if you're not including the image parameter.",
    },
    external_url: {
      value: userInput.external_url,
      used: false,
      necessity: "none",
      description:
        "This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site.",
    },
    description: {
      value: userInput.description,
      used: false,
      necessity: "recommended",
      description:
        "A human readable description of the item. Markdown is supported.",
    },
    name: {
      value: userInput.name,
      used: false,
      necessity: "required",
      description: "Name of the item.",
    },
    background_color: {
      value: userInput.background_color,
      used: false,
      necessity: "none",
      description:
        "Background color of the item on OpenSea. Must be a six-character hexadecimal without a pre-pended #.",
    },
    animation_url: {
      value: userInput.animation_url,
      used: false,
      necessity: "none",
      description:
        "A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.",
    },
    youtube_url: {
      value: userInput.youtube_url,
      used: false,
      necessity: "none",
      description:
        "Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported. youtube_url. A URL to a YouTube video.",
    },
  }

  return (
    <div>
      <div class="pb-4 pt-12 text-center text-4xl"> Properties </div>
      <div class="ml-2 mb-12">
        {Object.entries(properties).map(([propertyName, propertyInfo]) => {
          if (propertyInfo.value || propertyInfo.necessity === "none") {
            return (
              <div class="my-4 ml-14">
                <textarea
                  class="w-5/6 rounded-lg shadow-inner transition-colors focus:bg-white focus:shadow-md px-4 pt-4 resize-y border-b-[1px] border-solid border-[#69cdee] bg-[#f8fafb] focus:outline-none"
                  rows="1"
                  placeholder={propertyName}
                  value={propertyInfo.value}
                />
              </div>
            )
          } else if (propertyInfo.necessity === "required") {
            return (
              <div class="my-4 ml-14">
                <textarea
                  class="w-5/6 shadow-inner transition-colors focus:bg-white focus:shadow-md px-4 pt-4 resize-y border-b-[1px] border-solid border-[#69cdee] bg-[#f8fafb] focus:outline-none"
                  rows="1"
                  placeholder={`${propertyName} is a required property!`}
                  value={propertyInfo.value}
                />
              </div>
            )
          } else if (propertyInfo.necessity === "recommended") {
            return (
              <div class="my-4 ml-14">
                <textarea
                  class="w-5/6 shadow-inner transition-colors focus:bg-white focus:shadow-md px-4 pt-4 resize-y border-b-[1px] border-solid border-[#69cdee] bg-[#f8fafb] focus:outline-none"
                  rows="1"
                  placeholder={`${propertyName} is a recommended property.`}
                  value={propertyInfo.value}
                />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Properties
