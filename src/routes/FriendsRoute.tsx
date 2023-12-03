import React from 'react'
import { Flex } from '@chakra-ui/react'
import { FriendsList } from '../components/friends-component/FriendsList'

export function FriendsRoute() {
  return (
    <Flex width='70%'>
      <FriendsList />
    </Flex>
  )
}
