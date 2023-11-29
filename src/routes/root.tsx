import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/nav-bar/NavBar'
import { NavSection } from '../components/nav-section/NavSection'

export function Root() {
  return (
    <Flex
      height='100%'
      width='100%'
      margin={0}
      padding={0}
      flexDirection='column'
    >
      <Flex flexDirection='column' height='100%' width='100%'>
        <Flex flexDirection='row' width='100%' height='100vh'>
          <NavSection />
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  )
}
