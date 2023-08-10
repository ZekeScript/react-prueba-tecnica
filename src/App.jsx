import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ', 1)
        console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}`)
          .then(res => res.json)
          .then(data)
      })
  }, [])

  return (
    <main>
      <h1>App gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}

export default App
