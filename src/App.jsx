import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Tutorial } from "./pages/Tutorial"
import { Home } from "./pages/Home"
import { theme } from "./styles/theme.js"
import { GlobalStyle  } from "./styles/global.js"
import { Component } from "react"
import { Contatenos } from "./pages/Contatenos"
import { Componentes } from "./pages/Componentes"
import { Referencias } from "./pages/Referencias"
import { Sobrenos } from "./pages/Sobrenos"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/Tutorial",
    element: <Tutorial />
  },
  
  {
    path: "/Componentes",
    element: <Componentes />
  },

  {
    path: "/Sobrenos",
    element: <Sobrenos />
  },

  {
    path: "/Referencias",
    element: <Referencias />
  },

  {
    path: "/Contatenos",
    element: <Contatenos />
  },
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
} 

