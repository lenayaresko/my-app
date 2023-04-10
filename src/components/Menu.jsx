import { useState } from 'react'
import * as Styled from './styles/stylesMenu'

function Menu() {
  const [isVisible, setVisible] = useState(false)
  return (
    <nav className="main__nav nav">
      <Styled.NavLogo>
        <Styled.NavLogoImage src="./img/logo.png" alt="logo" />
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
              <Styled.MenuLink href="http://">Главное</Styled.MenuLink>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Styled.MenuLink href="http://">Мой плейлист</Styled.MenuLink>
            </Styled.MenuItem>
            <Styled.MenuItem>
              <Styled.MenuLink href="http://">Войти</Styled.MenuLink>
            </Styled.MenuItem>
          </Styled.MenuList>
        </Styled.NavMenu>
      )}
    </nav>
  )
}

export default Menu
