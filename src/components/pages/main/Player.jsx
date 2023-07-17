import { useState, useRef, useEffect } from 'react'
import * as Styled from '../../styles/stylesPlayer'

function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart

  const [seconds, setSeconds] = useState(0) // текущая позиция звука в секундах

  const [volumes, setVolume] = useState(0.5) // текущая позиция громкости

  useEffect(() => {
    setInterval(() => {
      if (isPlaying) {
        setSeconds(audioRef.current.currentTime) // устанавливаем состояние с текущим значением в секундах
      }
    }, 1000)
  })

  return (
    <>
      <Styled.HiddenAudio controls ref={audioRef}>
        <source src="/Bobby_Marleni_-_Dropin.mp3" type="audio/mpeg" />
        <track kind="captions" srcLang="ru" />
      </Styled.HiddenAudio>
      <Styled.PlayerBar>
        <Styled.PlayerBarContent>
          <Styled.PlayerBarProgress
            type="range"
            min="0"
            default="0"
            value={seconds}
            className="timeline"
            onChange={(e) => {
              setSeconds((audioRef.current.currentTime = e.target.value))
            }}
          />
          <Styled.PlayerBarBlock>
            <Styled.PlayerBarPlayer>
              <Styled.PlayerControls>
                <Styled.PlayerButtonsPrev>
                  <Styled.PlayerButtonsPrevSvg alt="prev">
                    <use xlinkHref="./img/icon/sprite.svg#icon-prev" />
                  </Styled.PlayerButtonsPrevSvg>
                </Styled.PlayerButtonsPrev>
                <Styled.PlayerButtonsPlay onClick={togglePlay}>
                  <Styled.PlayerButtonsPlaySvg
                    alt={isPlaying ? 'pause' : 'play'}
                  >
                    <use
                      xlinkHref={
                        isPlaying
                          ? './img/icon/sprite.svg#icon-pause'
                          : './img/icon/sprite.svg#icon-play'
                      }
                    />
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
                    min="0"
                    step="0.1"
                    max="1"
                    value={volumes}
                    onChange={(e) => {
                      setVolume((audioRef.current.volume = e.target.value))
                      console.log(volumes)
                    }}
                  />
                </Styled.PlayerButtonBarVolumeProgress>
              </Styled.PlayerButtonBarVolumeContent>
            </Styled.PlayerButtonBarVolumeBlock>
          </Styled.PlayerBarBlock>
        </Styled.PlayerBarContent>
      </Styled.PlayerBar>
    </>
  )
}

export default Player
