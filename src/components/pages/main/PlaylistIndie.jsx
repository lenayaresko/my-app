import * as Styled from '../../styles/stylesBar'

export function BarIndiePlaylist() {
  return (
    <Styled.MainCenterBlock>
      <Styled.MainCenterBlockSearch>
        <Styled.MainCenterBlockSearchSvg>
          <use xlinkHref="./img/icon/sprite.svg#icon-search" />
        </Styled.MainCenterBlockSearchSvg>
        <Styled.MainCenterBlockSearchText
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </Styled.MainCenterBlockSearch>
      <Styled.MainCenterBlockH2>Инди заряд</Styled.MainCenterBlockH2>

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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Guilt{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Elektro{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    I’m Fire{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Non Stop{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (Remix)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Run Run{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (feat. AR/CO)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Eyes on Fire{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (Zeds Dead Remix)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Mucho Bien{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                      (Hi Profile Remix)
                    </Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan>
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Knives n Cherries{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    How Deep Is Your Love{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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
                <Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleSvg>
                </Styled.MainCenterPlaylistContentPlaylistTrackTitleImage>
                <div>
                  <Styled.MainCenterPlaylistContentPlaylistTrackTitleLink href="http://">
                    Morena{' '}
                    <Styled.MainCenterPlaylistContentPlaylistTrackTitleSpan />
                  </Styled.MainCenterPlaylistContentPlaylistTrackTitleLink>
                </div>
              </Styled.MainCenterPlaylistContentPlaylistTrackTitle>
              <Styled.MainCenterPlaylistContentPlaylistTrackAuthor>
                <Styled.MainCenterPlaylistContentPlaylistTrackAuthorLink href="http://">
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

export default BarIndiePlaylist
