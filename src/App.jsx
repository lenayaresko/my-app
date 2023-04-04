import { useEffect, useState } from 'react'
import Bar from './components/Bar'
import Menu from './components/Menu'
import Name from './components/Name'
import LoadingName from './components/LoadingName'
import LoadingPlayer from './components/LoadingPlayer'
import Player from './components/Player'
import './App.css'

function App() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <div id="root" className="container">
      <main className="main">
        <Menu />
        <Bar />
        {isLoading ? <LoadingName /> : <Name />}
      </main>
      <div className="bar">{isLoading ? <LoadingPlayer /> : <Player />}</div>
    </div>
  )
}

export default App
