import { Flex } from '@chakra-ui/react'
import { MessagesComponent } from '../components/messages-component/MessagesComponent'

export function MessagesRoute() {
  return (
    <Flex width='70%'>
      <MessagesComponent />
    </Flex>
  )
}
