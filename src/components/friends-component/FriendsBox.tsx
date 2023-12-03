import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'
import { FaCircleUser } from 'react-icons/fa6'

const FriendsBox = () => {
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='space-around'
      backgroundColor='#262626'
      height='300px'
      width='300px'
      borderRadius={8}
      padding={5}
    >
      <Flex flexDirection='column' alignItems='center'>
        <Flex>
          <FaCircleUser color='white' size={65} />
        </Flex>
        <Flex flexDirection='column' alignItems='center'>
          <Text color='darkMode.text' fontSize='3xl' fontWeight='bold'>
            Chezem
          </Text>
          <Text color='darkMode.text'>@Venatiza</Text>
        </Flex>
      </Flex>
      <Flex>
        <Button backgroundColor='darkMode.primary' color='darkMode.text'>
          View Profile
        </Button>
      </Flex>
    </Flex>
  )
}

export { FriendsBox }
