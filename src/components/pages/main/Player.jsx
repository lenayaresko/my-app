import * as Styled from '../../styles/stylesPlayer'

function Player() {
  return (
    <Styled.PlayerBar>
      <Styled.PlayerBarContent>
        <Styled.PlayerBarProgress />
        <Styled.PlayerBarBlock>
          <Styled.PlayerBarPlayer>
            <Styled.PlayerControls>
              <Styled.PlayerButtonsPrev>
                <Styled.PlayerButtonsPrevSvg alt="prev">
                  <use xlinkHref="./img/icon/sprite.svg#icon-prev" />
                </Styled.PlayerButtonsPrevSvg>
              </Styled.PlayerButtonsPrev>
              <Styled.PlayerButtonsPlay>
                <Styled.PlayerButtonsPlaySvg alt="play">
                  <use xlinkHref="./img/icon/sprite.svg#icon-play" />
                </Styled.PlayerButtonsPlaySvg>
              </Styled.PlayerButtonsPlay>
              <Styled.PlayerButtonsNext>
                <Styled.PlayerButtonsNextSvg alt="next">
                  <use xlinkHref="./img/icon/sprite.svg#icon-next" />
                </Styled.PlayerButtonsNextSvg>
              </Styled.PlayerButtonsNext>
              <Styled.PlayerButtonsRepeat>
                <Styled.PlayerButtonsRepeatSvg alt="repeat">
                  <use xlinkHref="./img/icon/sprite.svg#icon-repeat" />
                </Styled.PlayerButtonsRepeatSvg>
              </Styled.PlayerButtonsRepeat>
              <Styled.PlayerButtonsShuffle>
                <Styled.PlayerButtonsShuffleSvg alt="shuffle">
                  <use xlinkHref="./img/icon/sprite.svg#icon-shuffle" />
                </Styled.PlayerButtonsShuffleSvg>
              </Styled.PlayerButtonsShuffle>
            </Styled.PlayerControls>

            <Styled.PlayerTrackPlay>
              <Styled.PlayerTrackPlayContain>
                <Styled.PlayerTrackPlayImage>
                  <Styled.PlayerTrackPlaySvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.PlayerTrackPlaySvg>
                </Styled.PlayerTrackPlayImage>
                <Styled.PlayerTrackPlayAuthor>
                  <Styled.PlayerTrackPlayAuthorLink href="http://">
                    Ты та...
                  </Styled.PlayerTrackPlayAuthorLink>
                </Styled.PlayerTrackPlayAuthor>
                <Styled.PlayerTrackPlayAlbum>
                  <Styled.PlayerTrackPlayAlbumLink href="http://">
                    Баста
                  </Styled.PlayerTrackPlayAlbumLink>
                </Styled.PlayerTrackPlayAlbum>
              </Styled.PlayerTrackPlayContain>

              <Styled.PlayerTrackPlayLikeDis>
                <Styled.PlayerButtonTrackPlayLike>
                  <Styled.PlayerButtonTrackPlayLikeSvg alt="like">
                    <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                  </Styled.PlayerButtonTrackPlayLikeSvg>
                </Styled.PlayerButtonTrackPlayLike>
                <Styled.PlayerButtonTrackPlayDislike>
                  <Styled.PlayerButtonTrackPlayDislikeSvg alt="dislike">
                    <use xlinkHref="./img/icon/sprite.svg#icon-dislike" />
                  </Styled.PlayerButtonTrackPlayDislikeSvg>
                </Styled.PlayerButtonTrackPlayDislike>
              </Styled.PlayerTrackPlayLikeDis>
            </Styled.PlayerTrackPlay>
          </Styled.PlayerBarPlayer>
          <Styled.PlayerButtonBarVolumeBlock>
            <Styled.PlayerButtonBarVolumeContent>
              <Styled.PlayerButtonBarVolumeImage>
                <Styled.PlayerButtonBarVolumeSvg alt="volume">
                  <use xlinkHref="./img/icon/sprite.svg#icon-volume" />
                </Styled.PlayerButtonBarVolumeSvg>
              </Styled.PlayerButtonBarVolumeImage>
              <Styled.PlayerButtonBarVolumeProgress>
                <Styled.PlayerButtonBarVolumeProgressLine
                  type="range"
                  name="range"
                />
              </Styled.PlayerButtonBarVolumeProgress>
            </Styled.PlayerButtonBarVolumeContent>
          </Styled.PlayerButtonBarVolumeBlock>
        </Styled.PlayerBarBlock>
      </Styled.PlayerBarContent>
    </Styled.PlayerBar>
  )
}

export default Player
