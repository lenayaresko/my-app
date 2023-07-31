import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useThemeContext } from '../../styles/themes'
import * as Styled from '../../styles/stylesMenu'

function Menu() {
  const { toggleTheme } = useThemeContext()

  const [isVisible, setVisible] = useState(false)
  return (
    <Styled.MainNav>
      <Styled.NavLogo>
        <Link to="/">
          <Styled.NavLogoImage src="./img/logo.png" alt="logo" />
        </Link>
      </Styled.NavLogo>
      <Styled.NavBurger onClick={() => setVisible(!isVisible)}>
        <Styled.NavBurgerLine />
        <Styled.NavBurgerLine />
        <Styled.NavBurgerLine />
      </Styled.NavBurger>
      {isVisible && (
        <Styled.NavMenu>
          <Styled.MenuList>
            <Styled.MenuItem>
              <Link to="/">
                <Styled.MenuLink>Главное</Styled.MenuLink>
              </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Link to="/myplaylist">
                <Styled.MenuLink>Мой плейлист</Styled.MenuLink>
              </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Link to="/login">
                <Styled.MenuLink>Войти</Styled.MenuLink>
              </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <button type="button" onClick={toggleTheme}>
                <Styled.MenuLink>Сменить тему</Styled.MenuLink>
              </button>
            </Styled.MenuItem>
          </Styled.MenuList>
        </Styled.NavMenu>
      )}
    </Styled.MainNav>
  )
}

export default Menu
