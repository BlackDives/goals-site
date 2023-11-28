import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { GoalOnFeed } from './GoalOnFeed'

const ContentSection = () => {
  return (
    <Flex flexDirection='column' width='40%' border='2px solid green'>
      <Text>Feed</Text>
      <Flex flexDirection='column' width='100%'>
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
