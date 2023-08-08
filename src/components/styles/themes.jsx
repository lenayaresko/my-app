import React, { useContext } from 'react'

export const themes = {
  light: {
    color: '#181818',
    background: '#ffffff',
    backgroundMenu: '#F6F5F3',
    logo: './img/logo-skypro.png',
    search: './img/icon/sprite.svg#icon-search-black',
    themeIcon: './img/icon/sprite.svg#icon-light-theme',
    trackIconBg: '#F6F4F4',
    accountIcon: './img/icon/sprite.svg#icon-account-light'
  },
  dark: {
    color: '#ffffff',
    background: '#181818',
    backgroundMenu: '#1C1C1C',
    logo: './img/logo.png',
    search: './img/icon/sprite.svg#icon-search',
    themeIcon: './img/icon/sprite.svg#icon-dark-theme',
    trackIconBg: '#313131',
    accountIcon: './img/icon/sprite.svg#icon-account-dark'
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark
  return theme
}
