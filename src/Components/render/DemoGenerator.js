import React from "react";

// Import UI Generator
import {
  UIGenerator,                   // main component
  isInvalid,                     // for validity checking
  createEmptyStore, createStore, // for initial data-store creation
  createMap, createOrderedMap,   // for deep immutables
  storeUpdater,                  // for on change handling
} from "@ui-schema/ui-schema";

// individual components, e.g. use one `UIMetaProvider` for many `UIStoreProvider` instead of `UIGenerator`
import { UIStoreProvider } from '@ui-schema/ui-schema/UIStore';
import { UIMetaProvider } from '@ui-schema/ui-schema/UIMeta';
// instead of `UIGenerator` use `UIRootRenderer` and pass down the schema
import { UIRootRenderer } from '@ui-schema/ui-schema/UIRootRenderer';

// Simple translator for in-schema translation, keyword `t`
import { relTranslator } from '@ui-schema/ui-schema/Translate/relT'

// import the widgets for your design-system.
import { widgets } from "@ui-schema/ds-material";

// Minimal Schema, transformed from JS-Object into deep immutable

const schema = createOrderedMap(
  {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "EIP-Schema",
    "type": "object",
    "required": [
      "name"
    ],
    "properties": {
      "image": {
        "type": "string",
        "description": "This is the URL to the image of the item. Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea), and can be IPFS URLs or paths. We recommend using a 350 x 350 image."
      },
      "image_data": {
        "type": "string",
        "description": "Raw SVG image data, if you want to generate images on the fly (not recommended). Only use this if you're not including the image parameter."
      },
      "external_url": {
        "type": "string",
        "description": "This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site."
      },
      "description": {
        "type": "string",
        "description": "A human readable description of the item. Markdown is supported."
      },
      "name": {
        "type": "string",
        "description": "Name of the item."
      },
      "background_color": {
        "type": "string",
        "description": "Background color of the item on OpenSea. Must be a six-character hexadecimal without a pre-pended #."
      },
      "animation_url": {
        "type": "string",
        "description": "A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA."
      },
      "youtube_url": {
        "type": "string",
        "description": "Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported. youtube_url. A URL to a YouTube video."
      },
    }
  });

const values = {
  "description": "The Heart Project is a community-run creative studio which enables passionate lovers of creativity to shape the art we interact with. 10,000 unique tokens on the Ethereum-based blockchain will serve as membership passes which grant access to creative contribution and shared ownership of our group creations. The Heart Project Creative Studio is designed to produce media with thousands of contributors on every project and grants ownership of our shared creations.",
  "image": "ipfs://QmTGXYR5g1QF2Wj7v8myKCrpGBnq2NU6SaPVBJpjXfkPKA/583.png",
  "name": "Heart #583",
  "attributes": [
    {
      "trait_type": "Color",
      "value": "Green"
    },
    {
      "trait_type": "Background",
      "value": "Pink Fence"
    },
    {
      "trait_type": "Body",
      "value": "Stubble"
    },
    {
      "trait_type": "Left Arm",
      "value": "Magnet"
    },
    {
      "trait_type": "Right Arm",
      "value": "Basketball"
    },
    {
      "trait_type": "Left Leg",
      "value": "Sandal"
    },
    {
      "trait_type": "Right Leg",
      "value": "Walking"
    },
    {
      "trait_type": "Eyes",
      "value": "Lazers"
    },
    {
      "trait_type": "Mouth",
      "value": "Silly With Teeth"
    },
    {
      "trait_type": "Headwear",
      "value": "Headphones"
    }
  ]
};

export const Generator = () => {
  // Create a state with the data, transforming into immutable on first mount
  const [store, setStore] = React.useState(() => createStore(createOrderedMap(values)));

  // or create empty store, based on the schema type:
  // const [store, setStore] = React.useState(() => createEmptyStore(schema.get('type'));

  const onChange = React.useCallback((actions) => {
    setStore(storeUpdater(actions))
  }, [setStore])

  return (
    <UIGenerator
      schema={schema}

      store={store}
      onChange={onChange}
      showValidity={true}

      widgets={widgets}
      t={relTranslator}
    />
  )
};

export default Generator