import { useState } from 'react'

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

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="./img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className={
            isOpenedModal === FILTERS.author
              ? '_btn-text-active button-author'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => onButtonClick(FILTERS.author)}
        >
          исполнителю
        </div>
        <div
          className={
            isOpenedModal === FILTERS.year
              ? '_btn-text-active button-author'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => onButtonClick(FILTERS.year)}
        >
          году выпуска
        </div>
        <div
          className={
            isOpenedModal === FILTERS.genre
              ? '_btn-text-active button-author'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => onButtonClick(FILTERS.genre)}
        >
          жанру
        </div>
      </div>
      {isOpenedModal === FILTERS.author && (
        <div className="modal_window_artist">
          <div className="modal_artist">element1</div>
        </div>
      )}
      {isOpenedModal === FILTERS.year && (
        <div className="modal_window_year">
          <div className="modal_artist">element2</div>
        </div>
      )}
      {isOpenedModal === FILTERS.genre && (
        <div className="modal_window_genre">
          <div className="modal_artist">element3</div>
        </div>
      )}
      {/* <div className="centerblock__filter filter">
                        <div className="filter__title">Искать по:</div>
                        <div className={ isActiveButtonFilterArtists ? ("_btn-text-active button-author") : ("filter__button button-author _btn-text")} onClick={ () => {setOpenedArtists(!isOpenedArtists);setOpenedYear(false);setOpenedGenre(false);setActiveButtonFilterArtists(!isActiveButtonFilterArtists);setActiveButtonFilterYear(false);setActiveButtonFilterGenre(false)}}>исполнителю</div>
                        <div className={ isActiveButtonFilterYear ? ("_btn-text-active button-year") : ("filter__button button-year _btn-text")} onClick={ () => {setOpenedYear(!isOpenedYear);setOpenedArtists(false);setOpenedGenre(false);setActiveButtonFilterYear(!isActiveButtonFilterYear);setActiveButtonFilterArtists(false);setActiveButtonFilterGenre(false)} }>году выпуска</div>
                        <div className={ isActiveButtonFilterGenre ? ("_btn-text-active button-genre") : ("filter__button button-genre _btn-text")} onClick={ () => {setOpenedGenre(!isOpenedGenre);setOpenedYear(false);setOpenedArtists(false);setActiveButtonFilterGenre(!isActiveButtonFilterGenre);setActiveButtonFilterArtists(false);setActiveButtonFilterYear(false)} }>жанру</div>
                    </div>
                    { isOpenedArtists && (<div className="modal_window_artist">{artists.forEach(element => {
                        <div className="modal_artist">{element}</div>
                    })}
                    </div>) }
                    { isOpenedYear && (<div className="modal_window_year">{artists.forEach(element => {
                        <div className="modal_artist">{element}</div>
                    })}
                    </div>) }
                    { isOpenedGenre && (<div className="modal_window_genre">{artists.forEach(element => {
                        <div className="modal_artist">{element}</div>
                    })}
                    </div>) } */}
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="./img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Guilt <span className="track__title-span" />
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Nero
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Welcome Reality
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">4:44</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Elektro <span className="track__title-span" />
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Dynoro, Outwork, Mr. Gee
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Elektro
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    I’m Fire <span className="track__title-span" />
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Ali Bakgor
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  I’m Fire
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">2:22</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Non Stop <span className="track__title-span">(Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Стоункат, Psychopath
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Non Stop
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">4:12</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Run Run{' '}
                    <span className="track__title-span">(feat. AR/CO)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Jaded, Will Clarke, AR/CO
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Run Run
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">2:54</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Eyes on Fire{' '}
                    <span className="track__title-span">(Zeds Dead Remix)</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Blue Foundation, Zeds Dead
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Eyes on Fire
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">5:20</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Mucho Bien{' '}
                    <span className="track__title-span">
                      (Hi Profile Remix)
                    </span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  HYBIT, Mr. Black, Offer Nissim, Hi Profile
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Mucho Bien
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">3:41</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Knives n Cherries <span className="track__title-span" />
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  minthaze
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Captivating
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">1:48</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    How Deep Is Your Love <span className="track__title-span" />
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Calvin Harris, Disciples
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  How Deep Is Your Love
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">3:32</span>
              </div>
            </div>
          </div>

          <div className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="./img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    Morena <span className="track__title-span" />
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  Tom Boxer
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  Soundz Made in Romania
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="./img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">3:36</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar
