import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { SuggestedContact } from './SuggestedContact'
import { ActivityBox } from './ActivityBox'

const SuggestedSection = () => {
  return (
    <Flex
      background='darkMode.background'
      flexDirection='column'
      alignItems='center'
      width='40%'
      paddingY={2}
    >
      <Flex width='80%' flexDirection='column' marginBottom={4}>
        <ActivityBox />
      </Flex>
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
          alignItems='center'
          paddingX={5}
          marginTop={6}
        >
          <Text color='darkMode.text' fontSize='xl'>
            Suggested
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
