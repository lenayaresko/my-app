import { useState } from 'react'
import * as Styled from '../../styles/stylesBar'
import { useThemeContext } from '../../styles/themes'

function Bar() {
  const [isOpenedModal, setOpenedModal] = useState(false)
  const FILTERS = {
    author: 'author',
    year: 'year',
    genre: 'genre',
  }

  function onButtonClick(modalName) {
    if (modalName === isOpenedModal) {
      setOpenedModal(false)
      return
    }
    setOpenedModal(modalName)
  }

  const { theme } = useThemeContext()

  return (
    <Styled.MainCenterBlock theme={theme}>
      <Styled.MainCenterBlockSearch>
        <Styled.MainCenterBlockSearchSvg>
          <use xlinkHref={theme.search} />
        </Styled.MainCenterBlockSearchSvg>
        <Styled.MainCenterBlockSearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </Styled.MainCenterBlockSearch>
      <Styled.MainCenterBlockH2 theme={theme}>Треки</Styled.MainCenterBlockH2>
      <Styled.MainCenterBlockFilter>
        <Styled.MainCenterBlockFilterTitle theme={theme}>
          Искать по:
        </Styled.MainCenterBlockFilterTitle>
        <Styled.MainCenterBlockFilterButtonsBlock>
          <Styled.MainCenterFilterButton
            theme={theme}
            $mode={isOpenedModal === FILTERS.author ? 'active' : 'not_active'}
            onClick={() => onButtonClick(FILTERS.author)}
          >
            исполнителю
          </Styled.MainCenterFilterButton>
          <Styled.MainCenterFilterButton
            theme={theme}
            $mode={isOpenedModal === FILTERS.year ? 'active' : 'not_active'}
            onClick={() => onButtonClick(FILTERS.year)}
          >
            году выпуска
          </Styled.MainCenterFilterButton>
          <Styled.MainCenterFilterButton
            theme={theme}
            $mode={isOpenedModal === FILTERS.genre ? 'active' : 'not_active'}
            onClick={() => onButtonClick(FILTERS.genre)}
          >
            жанру
          </Styled.MainCenterFilterButton>
        </Styled.MainCenterBlockFilterButtonsBlock>
      </Styled.MainCenterBlockFilter>
      {isOpenedModal === FILTERS.author && (
        <Styled.MainCenterBlockModalWindowArtist>
          <Styled.MainCenterBlockModalArtist>
            element1
          </Styled.MainCenterBlockModalArtist>
        </Styled.MainCenterBlockModalWindowArtist>
      )}
      {isOpenedModal === FILTERS.year && (
        <Styled.MainCenterBlockModalWindowYear>
          <Styled.MainCenterBlockModalArtist>
            element2
          </Styled.MainCenterBlockModalArtist>
        </Styled.MainCenterBlockModalWindowYear>
      )}
      {isOpenedModal === FILTERS.genre && (
        <Styled.MainCenterBlockModalWindowGenre>
          <Styled.MainCenterBlockModalArtist>
            element3
          </Styled.MainCenterBlockModalArtist>
        </Styled.MainCenterBlockModalWindowGenre>
      )}

      <Styled.MainCenterBlockContent>
        <Styled.MainCenterBlockContentTitle>
          <Styled.MainCenterPlaylistTitleCol01>
            Трек
          </Styled.MainCenterPlaylistTitleCol01>
          <Styled.MainCenterPlaylistTitleCol02>
            ИСПОЛНИТЕЛЬ
          </Styled.MainCenterPlaylistTitleCol02>
          <Styled.MainCenterPlaylistTitleCol03>
            АЛЬБОМ
          </Styled.MainCenterPlaylistTitleCol03>
          <Styled.MainCenterPlaylistTitleCol04>
            <Styled.MainCenterBlockContentTitleSvg alt="time">
              <use xlinkHref="./img/icon/sprite.svg#icon-watch" />
            </Styled.MainCenterBlockContentTitleSvg>
          </Styled.MainCenterPlaylistTitleCol04>
        </Styled.MainCenterBlockContentTitle>
        <Styled.MainCenterPlaylistContentPlaylist>
          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Guilt{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Nero
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Welcome Reality
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  4:44
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Elektro{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Dynoro, Outwork, Mr. Gee
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Elektro
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  2:22
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    I’m Fire{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Ali Bakgor
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  I’m Fire
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  2:22
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Non Stop{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (Remix)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Стоункат, Psychopath
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Non Stop
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  4:12
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Run Run{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (feat. AR/CO)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Jaded, Will Clarke, AR/CO
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Run Run
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  2:54
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Eyes on Fire{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (Zeds Dead Remix)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Blue Foundation, Zeds Dead
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Eyes on Fire
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  5:20
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Mucho Bien{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (Hi Profile Remix)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Mucho Bien
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  3:41
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Knives n Cherries{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  minthaze
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Captivating
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  1:48
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    How Deep Is Your Love{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Calvin Harris, Disciples
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  How Deep Is Your Love
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  3:32
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>

          <Styled.MainCenterPlaylistContentPlaylistItem>
            <Styled.MainCenterPlaylistContentPlaylistTrack>
              <Styled.MainCenterPlaylistContentPlaylistTrackTitle>
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage
                  theme={theme}
                >
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink
                    theme={theme}
                    href="http://"
                  >
                    Morena{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink
                  theme={theme}
                  href="http://"
                >
                  Tom Boxer
                </Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
              <Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
                <Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink href="http://">
                  Soundz Made in Romania
                </Styled.MainCenterPlaylistContentPlaylistTrackAlbumLink>
              </Styled.MainCenterPlaylistContentPlaylistTrackAlbum>
              <div>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSvg>
                <Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
                  3:36
                </Styled.MainCenterPlaylistContentPlaylistTrackTimeSpan>
              </div>
            </Styled.MainCenterPlaylistContentPlaylistTrack>
          </Styled.MainCenterPlaylistContentPlaylistItem>
        </Styled.MainCenterPlaylistContentPlaylist>
      </Styled.MainCenterBlockContent>
    </Styled.MainCenterBlock>
  )
}

export default Bar
