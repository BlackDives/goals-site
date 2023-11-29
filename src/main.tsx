import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Root } from './routes/root'
import { Home } from './routes/HomeRoute'
import { SearchRoute } from './routes/SearchRoute'
import { theme } from './config/theme'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/search',
        element: <SearchRoute />,
      },
    ],
  },
  {
    path: '/kam',
    element: <div>The kam route</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Flex marginX='auto' maxWidth='1500px'>
        <RouterProvider router={router} />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
)
