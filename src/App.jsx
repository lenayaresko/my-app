/* eslint-disable react/jsx-no-constructed-context-values */

import { useState } from 'react'
import { AppRoutes } from './routs'
import { ThemeContext, themes } from './components/styles/themes'

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <AppRoutes />
    </ThemeContext.Provider>
  )
}

export default App
