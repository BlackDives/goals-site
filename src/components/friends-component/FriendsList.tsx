import React from 'react'
import { Flex, Text, Grid } from '@chakra-ui/react'
import { FriendsBox } from './FriendsBox'

const FriendsList = () => {
  return (
    <Flex flexDirection='column' width='100%'>
      <Flex marginBottom={2}>
        <Text color='darkMode.text' fontSize='3xl'>
          My friends
        </Text>
      </Flex>
      <Grid templateColumns='repeat(3, 1fr)' gap={5}>
        <FriendsBox />
        <FriendsBox />
        <FriendsBox />
        <FriendsBox />
        <FriendsBox />
      </Grid>
    </Flex>
  )
}

export { FriendsList }
