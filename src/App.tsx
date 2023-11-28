import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { NavBar } from './components/nav-bar/NavBar'
import { NavSection } from './components/nav-section/NavSection'
import { ContentSection } from './components/content-section/ContentSection'
import { SuggestedSection } from './components/right-section/SuggestedSection'

function App() {
  return (
    <Flex height='100%' width='100%' margin={0} padding={0}>
      <Flex flexDirection='column' height='100%' width='100%'>
        <Flex>
          <NavBar />
        </Flex>
        <Flex flexDirection='row' width='100%' height='100vh'>
          <NavSection />
          <ContentSection />
          <SuggestedSection />
        </Flex>
      </Flex>
    </Flex>
  )
}

export { App }
