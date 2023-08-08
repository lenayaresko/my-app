/* eslint-disable import/no-named-as-default */
import { useEffect, useState } from 'react'
import * as Styled from '../../styles/globalStyles'
import Bar from './Bar'
import Menu from './Menu'
import Name from './Name'
import Player from './Player'
import BarDayPlaylist from './PlaylistDay'
import BarDancePlaylist from './PlaylistDanceHits'
import BarIndiePlaylist from './PlaylistIndie'
import BarMyPlaylist from './MyPlaylist'
import LoadingName from '../skeleton/LoadingName'
import LoadingPlayer from '../skeleton/LoadingPlayer'
import { Login } from '../auth/Login'
import { useThemeContext } from '../../styles/themes'

export function PageLogged() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  const { theme } = useThemeContext()

  return (
    <Styled.Container theme={theme} id="root">
      <Styled.Main theme={theme}>
        <Styled.GlobalStyle />
        <Menu />
        <Bar />
        {isLoading ? <LoadingName /> : <Name />}
      </Styled.Main>
      <Styled.Bar theme={theme}>
        {isLoading ? <LoadingPlayer /> : <Player />}
      </Styled.Bar>
    </Styled.Container>
  )
}

export function PageDayPlaylist() {
  const { theme } = useThemeContext()
  return (
    <Styled.Container theme={theme} id="root">
      <Styled.Main>
        <Styled.GlobalStyle />
        <Menu />
        <BarDayPlaylist />
        <Name />
      </Styled.Main>
      <Styled.Bar theme={theme}>
        <Player />
      </Styled.Bar>
    </Styled.Container>
  )
}

export function PageDancePlaylist() {
  const { theme } = useThemeContext()
  return (
    <Styled.Container theme={theme} id="root">
      <Styled.Main>
        <Styled.GlobalStyle />
        <Menu />
        <BarDancePlaylist />
        <Name />
      </Styled.Main>
      <Styled.Bar theme={theme}>
        <Player />
      </Styled.Bar>
    </Styled.Container>
  )
}

export function PageIndiePlaylist() {
  const { theme } = useThemeContext()
  return (
    <Styled.Container theme={theme} id="root">
      <Styled.Main>
        <Styled.GlobalStyle />
        <Menu />
        <BarIndiePlaylist />
        <Name />
      </Styled.Main>
      <Styled.Bar theme={theme}>
        <Player />
      </Styled.Bar>
    </Styled.Container>
  )
}

export function PageMyPlaylist() {
  const { theme } = useThemeContext()
  return (
    <Styled.Container theme={theme} id="root">
      <Styled.Main>
        <Styled.GlobalStyle />
        <Menu />
        <BarMyPlaylist />
        <Name />
      </Styled.Main>
      <Styled.Bar theme={theme}>
        <Player />
      </Styled.Bar>
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
