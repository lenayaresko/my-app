import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as Styled from '../../styles/stylesMenu'
import { useThemeContext } from '../../styles/themes'

function Menu() {
  const { theme, toggleTheme } = useThemeContext()

  const [isVisible, setVisible] = useState(false)
  return (
    <Styled.MainNav theme={theme}>
      <Styled.NavLogo>
        <Link to="/">
          <Styled.NavLogoImage src={theme.logo} alt="logo" />
        </Link>
      </Styled.NavLogo>
      <Styled.NavBurger onClick={() => setVisible(!isVisible)}>
        <Styled.NavBurgerLine theme={theme} />
        <Styled.NavBurgerLine theme={theme} />
        <Styled.NavBurgerLine theme={theme} />
      </Styled.NavBurger>
      {isVisible && (
        <Styled.NavMenu>
          <Styled.MenuList>
            <Styled.MenuItem>
              <Link to="/">
                <Styled.MenuLink theme={theme}>Главное</Styled.MenuLink>
              </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Link to="/myplaylist">
                <Styled.MenuLink theme={theme}>Мой плейлист</Styled.MenuLink>
              </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Link to="/login">
                <Styled.MenuLink theme={theme}>Войти</Styled.MenuLink>
              </Link>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Styled.MenuItemThemeSvg onClick={toggleTheme}>
                <use xlinkHref={theme.themeIcon} />
              </Styled.MenuItemThemeSvg>
            </Styled.MenuItem>
          </Styled.MenuList>
        </Styled.NavMenu>
      )}
    </Styled.MainNav>
  )
}

export default Menu
