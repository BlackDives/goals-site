import React from 'react'
import { Flex, Input, Text } from '@chakra-ui/react'
import { MessagePreview } from './MessagePreview'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'

const MessagesComponent = () => {
  return (
    <Flex flexDirection='column' height='70vh' width='100%'>
      <Flex>
        <Text fontSize='3xl' color='darkMode.text'>
          Messages
        </Text>
      </Flex>
      <Flex height='100%' width='100%'>
        <Flex
          flexDirection='column'
          height='100%'
          width='70%'
          backgroundColor='#262626'
          marginRight={6}
          padding={4}
          borderRadius={8}
        >
          <Flex height='5%' marginBottom={5}>
            <Text color='darkMode.text' fontSize='xl'>
              Chezem Cheese
            </Text>
          </Flex>
          <Flex height='90%' flexDirection='column' justifyContent='flex-start'>
            <IncomingMessage message='Hey! Congrats on your new goal kam!' />
            <IncomingMessage message='What do you have planned next? :3' />
            <Flex width='100%' flexDirection='row' justifyContent='flex-end'>
              <OutgoingMessage message='Shiiiii' />
            </Flex>
          </Flex>
          <Flex height='5%'>
            <Input
              placeholder='Type your message...'
              border='none'
              backgroundColor='darkMode.background'
              borderRadius={25}
            />
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          alignItems='center'
          background='#262626'
          padding={6}
          borderRadius={8}
          width='30%'
        >
          <Flex width='100%'>
            <Input
              placeholder='Search...'
              border='none'
              background='darkMode.background'
              borderRadius={25}
            />
          </Flex>
          <Flex flexDirection='column'>
            <MessagePreview />
            <MessagePreview />
            <MessagePreview />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { MessagesComponent }
