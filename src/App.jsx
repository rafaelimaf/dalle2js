import React, { useState } from 'react';
import openai from './utils/openAi';

function App() {
  const [imageDescription, setImageDescription] = useState('');
  const [imagesUrls, setImagesUrls] = useState([]);
  const [hasFetch, setHasFetch] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const generateImage = async (description) => {
    setHasFetch(false);
    setImagesUrls([]);

    try {
      const response = await openai.createImage({
        prompt: description,
        n: 10,
        size: '1024x1024',
      });
      setImagesUrls(response.data.data);
      setHasFetch(true);
      setErrorMessage(false);
    } catch (e) {
      setErrorMessage('Não entendi o que você está buscando, poderia tentar descrever novamente? :/');
      setHasFetch(true);
    }
  };

  return (
    <div>
      <h1>DALL-E 2 Javascript</h1>
      {hasFetch ? (
        <>
          <h2>Descreva o que você gostaria de visualizar:</h2>
          <input
            type="text"
            onChange={({ target }) => setImageDescription(target.value)}
            value={imageDescription}
          />
          <button
            type="submit"
            onClick={() => generateImage(imageDescription)}
          >
            Generate
          </button>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : null}
        </>
      ) : (
        <p>Loading...</p>
      )}
      {imagesUrls.map((img) => (
        <img src={img.url} alt="" />
      ))}
    </div>
  );
}

export default App;
