import { useEffect, useState } from 'react'
import * as Styled from '../../styles/globalStyles'
import Bar from './Bar'
import Menu from './Menu'
import Name from './Name'
import Player from './Player'
import LoadingName from '../skeleton/LoadingName'
import LoadingPlayer from '../skeleton/LoadingPlayer'
import { Login } from '../auth/Login'

export function PageLogged() {
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
      <Styled.Bar>{isLoading ? <LoadingPlayer /> : <Player />}</Styled.Bar>
    </Styled.Container>
  )
}

export function PageNotLogged() {
  return (
    <Styled.Container id="root">
      <Login />
    </Styled.Container>
  )
}

export default PageNotLogged
