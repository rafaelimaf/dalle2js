import React, { useState } from 'react'
import { openai } from './openAi'

function App () {
  const [imageDescription, setImageDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const saveImageDescription = ({ target }) => {
    setImageDescription(target.value)
  }

  const generateImage = async (description) => {
    const response = await openai.createImage({
      prompt: description,
      n: 1,
      size: '1024x1024'
    })

    setImageUrl(response.data.data[0].url)
  }

  return (
    <div>
      <h2>Describe what you want to visualize</h2>
      <input type="text" onChange={saveImageDescription} value={imageDescription}/>
      <button type="button" onClick={() => generateImage(imageDescription)}>Generate</button>
      <img src={imageUrl}/>
    </div>
  )
}

export default App
