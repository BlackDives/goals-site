import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const GoalOnFeed = () => {
  return (
    <Flex
      flexDirection='column'
      border='2px solid'
      borderColor='darkMode.primary'
    >
      <Flex flexDirection='row'>
        <Text>Bulk up 10lbs over the next 3 months</Text>
        <Text>KamNotKam</Text>
      </Flex>
      <Flex>
        <Text>I want to bulk up about 10lbs</Text>
      </Flex>
      <Flex flexDirection='column'>
        <Text>Progress:</Text>
        <Text>65%</Text>
      </Flex>
    </Flex>
  )
}

export { GoalOnFeed }
