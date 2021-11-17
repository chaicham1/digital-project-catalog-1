import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import ProjectDetailsPage from './Pages/ProjectDetailsPage'
import ProjectsCatalogPage from './Pages/ProjectsCatalogPage'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

function App() {
  const [darkState, setDarkState] = useState(false)

  const mode = darkState ? 'dark' : 'light'

  const darkTheme = createTheme({
    palette: {
      mode: mode,
      background: {
        default: mode === 'dark' ? '#282828' : '#fff',
      },
    },
  })

  function themeSwitchHandler() {
    setDarkState(!darkState)
  }

  const projectCatalogWithTheme = (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProjectsCatalogPage themeSwitchHandler={themeSwitchHandler} isDarkTheme={darkState} />
    </ThemeProvider>
  )
  const projectCDetailsWithTheme = (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProjectDetailsPage />
    </ThemeProvider>
  )

  let routes = useRoutes([
    {
      path: '/',
      element: projectCatalogWithTheme,
    },
    { path: ':id', element: projectCDetailsWithTheme },
  ])

  return routes
}

export default App
