import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { SuggestedContact } from './SuggestedContact'

const SuggestedSection = () => {
  return (
    <Flex
      background='darkMode.background'
      flexDirection='column'
      width='30%'
      borderLeft='2px solid'
      borderColor='darkMode.primary'
    >
      <Flex
        width='100%'
        flexDirection='row'
        justifyContent='space-between'
        padding={2}
      >
        <Text color='darkMode.text' fontSize='xl'>
          Suggested Section
        </Text>
        <Text color='darkMode.text'>See All</Text>
      </Flex>
      <Flex flexDirection='column' padding={2}>
        <SuggestedContact />
        <SuggestedContact />
        <SuggestedContact />
        <SuggestedContact />
      </Flex>
    </Flex>
  )
}

export { SuggestedSection }
