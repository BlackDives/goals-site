import React from 'react'
import { Flex, Button } from '@chakra-ui/react'
import { QuickNewGoal } from './QuickNewGoal'
import { GoalOnFeed } from './GoalOnFeed'

const ContentSection = () => {
  return (
    <Flex
      backgroundColor='darkMode.background'
      flexDirection='column'
      width='60%'
      paddingY={2}
    >
      <QuickNewGoal />
      <Flex flexDirection='column' width='100%'>
        <GoalOnFeed />
        <GoalOnFeed />
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
