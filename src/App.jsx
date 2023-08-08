import { useEffect, useState } from 'react'

function App () {
  const [fact, setFact] = useState('lorem')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>App gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}

export default App
