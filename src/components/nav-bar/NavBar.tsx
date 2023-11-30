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
      backgroundColor='#262626'
      marginBottom={3}
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
            MyGLZ
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
        <Flex height='50px' width='55%'>
          <Button
            display='flex'
            flexDirection='row'
            justifyContent='flex-end'
            backgroundColor='#131313'
            height='100%'
            borderRightRadius={0}
            borderLeftRadius={25}
            padding={0}
          >
            <FaSearch color='gray' />
          </Button>
          <Input
            placeholder={`Search...`}
            height='100%'
            width='90%'
            border='none'
            backgroundColor='#131313'
            borderLeftRadius={0}
            borderRightRadius={25}
            paddingLeft={2}
            _placeholder={{ color: 'gray' }}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export { NavBar }
