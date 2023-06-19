import { useEffect, useState } from 'react'
import * as Styled from './components/styles/globalStyles'
import Bar from './components/pages/main/Bar'
import Menu from './components/pages/main/Menu'
import Name from './components/pages/main/Name'
import LoadingName from './components/pages/skeleton/LoadingName'
import LoadingPlayer from './components/pages/skeleton/LoadingPlayer'
import Player from './components/pages/main/Player'
import { AppRoutes } from './routs'

function App() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <Styled.Container id="root">
      <AppRoutes />
      <Styled.Main>
        <Styled.GlobalStyle />
        <Menu />
        <Bar />
        {isLoading ? <LoadingName /> : <Name />}
      </Styled.Main>
      <Styled.Bar>{isLoading ? <LoadingPlayer /> : <Player />}</Styled.Bar>
    </Styled.Container>
  )
}

export default App
