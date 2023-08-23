import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [catImg, setCatImg] = useState()

  // recuperar cita
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // recuperar imagen con cita nueva
  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 1).join()
    console.log(firstWord)

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        console.log(url)
        setCatImg(url)
      })
  }, [fact])

  const handleCLick = () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  return (
    <main>
      <h1>App gatitos</h1>
      <button onClick={handleCLick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {catImg && <img src={`${CAT_PREFIX_IMAGE_URL}${catImg}`} alt='cat img with catfact' />}
    </main>
  )
}

export default App
