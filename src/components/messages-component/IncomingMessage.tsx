import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaCircleUser } from 'react-icons/fa6'

type IncomingMessageProps = {
  message: string
}

const IncomingMessage = (props: IncomingMessageProps) => {
  const { message } = props
  return (
    <Flex flexDirection='row' alignItems='center' marginBottom={4}>
      <Flex marginRight={2}>
        <FaCircleUser color='white' size={45} />
      </Flex>
      <Flex>
        <Text
          color='darkMode.text'
          backgroundColor='darkMode.primary'
          padding={3}
          borderRadius={8}
        >
          {message}
        </Text>
      </Flex>
    </Flex>
  )
}

export { IncomingMessage }
