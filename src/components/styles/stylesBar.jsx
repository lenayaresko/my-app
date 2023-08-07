import styled from 'styled-components'

export const MainCenterBlock = styled.div`
  padding-bottom: 80px;
  padding-left: 50px;
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  background-color: ${(props) => props.theme.background};
`

export const MainCenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
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
  div::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'StratosSkyeng', sans-serif;
  }
  div:-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'StratosSkyeng', sans-serif;
  }
  div::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'StratosSkyeng', sans-serif;
  }
  div::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    font-family: 'StratosSkyeng', sans-serif;
  }
`

export const MainCenterBlockSearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`

export const MainCenterBlockSearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`

export const MainCenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
  color: ${(props) => props.theme.color};
`

export const MainCenterBlockFilterButtonsBlock = styled.div`
  display: flex;
  div:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
  }
  div:active {
    border-color: #ad61ff;
    color: #ad61ff;
  }
  div:not(:last-child) {
    margin-right: 10px;
  }
`

export const MainCenterBlockFilter = styled.div`
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
  margin-bottom: 51px;
`
export const MainCenterBlockFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
  color: ${(props) => props.theme.color};
`
export const MainCenterBlockModalWindowArtist = styled.div`
  width: 248px;
  background-color: #313131;
  height: 305px;
  border-radius: 12px;
  position: absolute;
  left: 330px;
  top: 258px;
`
export const MainCenterBlockModalWindowYear = styled.div`
  width: 248px;
  background-color: #313131;
  height: 305px;
  border-radius: 12px;
  position: absolute;
  left: 485px;
  top: 258px;
`
export const MainCenterBlockModalWindowGenre = styled.div`
  width: 248px;
  background-color: #313131;
  height: 305px;
  border-radius: 12px;
  position: absolute;
  left: 640px;
  top: 258px;
`
export const MainCenterBlockModalArtist = styled.div`
  color: #ffffff;
  padding: 30px;
`
export const MainCenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const MainCenterBlockContentTitle = styled.div`
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const MainCenterBlockContentTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

export const MainCenterPlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

export const MainCenterPlaylistTitleCol01 = styled(MainCenterPlaylistTitleCol)`
  width: 220px;
`
export const MainCenterPlaylistTitleCol02 = styled(MainCenterPlaylistTitleCol)`
  width: 291px;
`
export const MainCenterPlaylistTitleCol03 = styled(MainCenterPlaylistTitleCol)`
  width: 195px;
`
export const MainCenterPlaylistTitleCol04 = styled(MainCenterPlaylistTitleCol)`
  width: 60px;
  text-align: start;
`

export const MainCenterPlaylistContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`
export const MainCenterPlaylistContentPlaylistItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`
export const MainCenterPlaylistContentPlaylistTrack = styled.div`
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const MainCenterPlaylistContentPlaylistTrackTitle = styled.div`
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
  width: 267px;
`
export const MainCenterPlaylistContentPlaylistTrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: ${(props) => props.theme.trackIconBg};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`
export const MainCenterPlaylistContentPlaylistTrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`
export const MainCenterPlaylistContentPlaylistTrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
`
export const MainCenterPlaylistContentPlaylistTrackAuthor = styled.div`
  width: 341px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`
export const MainCenterPlaylistContentPlaylistTrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color};
  text-align: left;
`
export const MainCenterPlaylistContentPlaylistTrackAlbum = styled.div`
  width: 245px;
`
export const MainCenterPlaylistContentPlaylistTrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`
export const MainCenterPlaylistContentPlaylistTrackTimeSvg = styled.svg`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`
export const MainCenterPlaylistContentPlaylistTrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const MainCenterPlaylistContentPlaylistTrackTimeSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`

export const MainCenterFilterButton = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case 'active':
        return `
          border-color: #b672ff;
          color: #b672ff;
          cursor: pointer;
          border: 1px solid #b672ff;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          border-radius: 60px;
          padding: 6px 20px;
        `
      default:
        return `
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          border: 1px solid ${props.theme.color};
          border-radius: 60px;
          padding: 6px 20px;
          cursor: pointer;
          color: ${props.theme.color}
        `
    }
  }}
`

export default MainCenterBlock
