import { useEffect, useState } from 'react'
import * as Styled from './components/styles/globalStyles'
import Bar from './components/Bar'
import Menu from './components/Menu'
import Name from './components/Name'
import LoadingName from './components/skeleton/LoadingName'
import LoadingPlayer from './components/skeleton/LoadingPlayer'
import Player from './components/Player'

function App() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <Styled.Container id="root">
      <Styled.Main>
        <Styled.GlobalStyle />
        <Menu />
        <Bar />
        {isLoading ? <LoadingName /> : <Name />}
      </Styled.Main>
      <div className="bar">{isLoading ? <LoadingPlayer /> : <Player />}</div>
    </Styled.Container>
  )
}

export default App
