import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaCircleUser } from 'react-icons/fa6'

type OutgoingMessageProps = {
  message: string
}

const OutgoingMessage = (props: OutgoingMessageProps) => {
  const { message } = props
  return (
    <Flex flexDirection='row' alignItems='center' marginBottom={4}>
      <Flex marginRight={2}>
        <Text
          color='darkMode.text'
          backgroundColor='darkMode.background'
          padding={3}
          borderRadius={8}
        >
          {message}
        </Text>
      </Flex>
      <Flex>
        <FaCircleUser color='white' size={45} />
      </Flex>
    </Flex>
  )
}

export { OutgoingMessage }
