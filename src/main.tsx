import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { NavBar } from './components/nav-bar/NavBar'
import { Root } from './routes/root'
import { Home } from './routes/HomeRoute'
import { SearchRoute } from './routes/SearchRoute'
import { GoalsRoute } from './routes/GoalsRoute'
import { FriendsRoute } from './routes/FriendsRoute'
import { theme } from './config/theme'
import './index.css'
import { MessagesRoute } from './routes/MessagesRoute'

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
      {
        path: '/goals',
        element: <GoalsRoute />,
      },
      {
        path: '/friends',
        element: <FriendsRoute />,
      },
      {
        path: '/messages',
        element: <MessagesRoute />,
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
      <NavBar />
      <Flex marginX='auto' maxWidth='1500px'>
        <RouterProvider router={router} />
      </Flex>
    </ChakraProvider>
  </React.StrictMode>
)
