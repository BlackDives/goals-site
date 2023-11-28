import React from 'react'
import { Flex, Text, Input, Button } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const NavBar = () => {
  return (
    <Flex
      flexDirection='row'
      justifyContent='space-around'
      alignItems='center'
      width='100%'
      height='100px'
      backgroundColor={'darkMode.background'}
      borderBottom='2px solid'
      borderColor='darkMode.primary'
    >
      <Flex
        height='100%'
        width='30%'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
      >
        <Flex flexDirection='row' width='50%' justifyContent='flex-start'>
          <Text fontSize='50px' color={'darkMode.primary'}>
            GLZ
          </Text>
        </Flex>
      </Flex>
      <Flex
        height='100%'
        width='70%'
        flexDirection='row'
        alignItems='center'
        justifyContent='flex-start'
      >
        <Flex
          height='50px'
          width='55%'
          border='2px solid'
          borderColor='darkMode.primary'
          borderRadius={3}
        >
          <Input
            placeholder='Search'
            height='100%'
            width='90%'
            border='none'
            borderLeftRadius={5}
          />
          <Button
            height='100%'
            width='10%'
            border='none'
            borderRightRadius={0}
            borderLeftRadius={0}
            backgroundColor='darkMode.primary'
            color='darkMode.text'
          >
            <FaSearch />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { NavBar }
