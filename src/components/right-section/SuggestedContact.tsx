import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaCircle } from 'react-icons/fa6'

const SuggestedContact = () => {
  return (
    <Flex
      flexDirection='row'
      justifyContent='space-between'
      width='100%'
      marginBottom={4}
    >
      <Flex flexDirection='row' alignItems='center'>
        <Flex marginRight={2}>
          <FaCircle size={40} backgroundColor='darkMode.primary' />
        </Flex>
        <Flex flexDirection='column'>
          <Text color='darkMode.text'>KamNotKam</Text>
          <Text color='darkMode.text' fontSize='sm'>
            Suggested for you
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <Text color='darkMode.text'>Follow</Text>
      </Flex>
    </Flex>
  )
}

export { SuggestedContact }
