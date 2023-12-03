import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaCircleUser } from 'react-icons/fa6'

const MessagePreview = () => {
  return (
    <Flex flexDirection='row' paddingY={4}>
      <Flex marginRight={2}>
        <FaCircleUser color='white' size={45} />
      </Flex>
      <Flex flexDirection='column'>
        <Text color='darkMode.text' fontSize='xl' fontWeight='bold'>
          Chezem Cheese
        </Text>
        <Text color='darkMode.text' fontSize='sm'>
          Congrats on your new goal!
        </Text>
      </Flex>
    </Flex>
  )
}

export { MessagePreview }
