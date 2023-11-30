import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { SuggestedContact } from './SuggestedContact'

const SuggestedSection = () => {
  return (
    <Flex
      background='darkMode.background'
      flexDirection='column'
      alignItems='center'
      width='40%'
      paddingY={2}
    >
      <Flex
        backgroundColor='#262626'
        flexDirection='column'
        width='80%'
        borderRadius={8}
      >
        <Flex
          width='100%'
          flexDirection='row'
          justifyContent='space-between'
          paddingX={5}
          marginTop={3}
        >
          <Text color='darkMode.text' fontSize='xl'>
            Suggested Section
          </Text>
          <Text color='darkMode.text'>See All</Text>
        </Flex>
        <Flex flexDirection='column' paddingX={5} marginTop={3}>
          <SuggestedContact />
          <SuggestedContact />
          <SuggestedContact />
          <SuggestedContact />
        </Flex>
      </Flex>
    </Flex>
  )
}

export { SuggestedSection }
