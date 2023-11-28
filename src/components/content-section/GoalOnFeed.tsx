import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const GoalOnFeed = () => {
  return (
    <Flex
      flexDirection='column'
      borderBottom='2px solid'
      borderColor='darkMode.primary'
      padding={2}
    >
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        width='100%'
        marginBottom={2}
      >
        <Text color='darkMode.text' fontSize='xl'>
          Bulk up 10lbs over the next 3 months
        </Text>
        <Text color='darkMode.text'>KamNotKam</Text>
      </Flex>
      <Flex marginBottom={2}>
        <Text color='darkMode.text'>I want to bulk up about 10lbs</Text>
      </Flex>
      <Flex flexDirection='row'>
        <Text color='darkMode.text'>Progress: 65%</Text>
      </Flex>
    </Flex>
  )
}

export { GoalOnFeed }
