import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { GoalOnFeed } from './GoalOnFeed'

const ContentSection = () => {
  return (
    <Flex
      backgroundColor='darkMode.background'
      flexDirection='column'
      width='60%'
      overflowY='scroll'
    >
      <Text
        color='darkMode.text'
        borderBottom='2px solid'
        borderColor='darkMode.primary'
        fontSize='xl'
        padding={2}
      >
        Feed
      </Text>
      <Flex flexDirection='column' width='100%'>
        <GoalOnFeed />
        <GoalOnFeed />
        <GoalOnFeed />
        <GoalOnFeed />
        <GoalOnFeed />
        <GoalOnFeed />
        <GoalOnFeed />
      </Flex>
    </Flex>
  )
}

export { ContentSection }
