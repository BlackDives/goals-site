import React from 'react'
import { Flex, Button, Input } from '@chakra-ui/react'
import { FaCircleUser } from 'react-icons/fa6'

const QuickNewGoal = () => {
  return (
    <Flex
      backgroundColor='#262626'
      flexDirection='row'
      alignItems='center'
      justifyContent='flex-start'
      color='darkMode.text'
      fontSize='xl'
      padding={5}
      marginBottom={5}
      borderRadius={8}
    >
      <Flex
        flexDirection='column'
        justifyContent='flex-start'
        width='10%'
        height='100%'
      >
        <FaCircleUser size={45} />
      </Flex>
      <Flex flexDirection='column' alignItems='flex-end' width='90%'>
        <Flex width='100%'>
          <Input
            border='none'
            borderRadius={25}
            backgroundColor='#131313'
            placeholder='What is a new goal that you have?'
            _placeholder={{ color: 'gray' }}
          />
        </Flex>
        <Flex
          flexDirection='column'
          alignItems='flex-end'
          width='30%'
          marginTop={3}
        >
          <Button backgroundColor='darkMode.primary' color='darkMode.text'>
            Create
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { QuickNewGoal }
