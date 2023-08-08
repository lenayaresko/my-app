import styled from 'styled-components'

export const HiddenAudio = styled.audio`
  display: none;
`

export const PlayerBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.background};
`

export const PlayerBarContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  div:active input {
    background-color: #a0276e;
    color: #a0276e;
  }
`

export const PlayerBarProgress = styled.input`
  width: 100%;
  height: 5px;
  background: #2e2e2e;
`

export const PlayerBarBlock = styled.div`
  height: 73px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const PlayerBarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
  div:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  div:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  div:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const PlayerButtons = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const PlayerButtonsPrev = styled(PlayerButtons)`
  margin-right: 23px;
`

export const PlayerButtonsPlay = styled(PlayerButtons)`
  margin-right: 23px;
`

export const PlayerButtonsNext = styled(PlayerButtons)`
  margin-right: 28px;
  fill: #a53939;
`

export const PlayerButtonsRepeat = styled(PlayerButtons)`
  margin-right: 24px;
`

export const PlayerButtonsShuffle = styled(PlayerButtons)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const PlayerButtonsPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerButtonsPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerButtonsNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`

export const PlayerButtonsRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlayerButtonsShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const PlayerTrackPlay = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
`

export const PlayerTrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  align-content: center;
`

export const PlayerTrackPlayImage = styled.div`
  width: 51px;
  height: 51px;
  background-color: ${(props) => props.theme.trackIconBg};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 12px;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  -ms-grid-column: 1;
  grid-area: image;
`

export const PlayerTrackPlaySvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const PlayerTrackPlayAuthor = styled.div`
  -ms-grid-row: 1;
  -ms-grid-column: 2;
  grid-area: author;
  min-width: 49px;
`

export const PlayerTrackPlayAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
  white-space: nowrap;
`

export const PlayerTrackPlayAlbum = styled.div`
  -ms-grid-row: 2;
  -ms-grid-column: 2;
  grid-area: album;
  min-width: 49px;
`

export const PlayerTrackPlayAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
`

export const PlayerTrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
  div:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  div:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  div:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export const PlayerButtonTrackPlayLikeSvg = styled.svg`
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
export const PlayerButtonTrackPlayDislikeSvg = styled.svg`
  width: 14.34px;
  height: 13px;
  fill: transparent;
  stroke: #696969;
  fill: #696969;
  stroke: #ffffff;
  cursor: pointer;
`

export const PlayerButtonBarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`

export const PlayerButtonBarVolumeContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`
export const PlayerButtonBarVolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`

export const PlayerButtonBarVolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`
export const PlayerButtonBarVolumeProgress = styled.div`
  width: 109px;
`

export const PlayerButtonBarVolumeProgressLine = styled.input`
  width: 109px;
`

export const PlayerButtonBarIcon = styled.div``

export const PlayerButtonTrackPlayLike = styled.div`
  padding: 5px;
`

export const PlayerButtonTrackPlayDislike = styled(PlayerButtonBarIcon)`
  padding: 5px;
  margin-left: 28.5px;
  div:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  div:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  div:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`

export default PlayerBar
