import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaCircle, FaCircleUser } from 'react-icons/fa6'

type ActivityBoxTypes = {
  message: string
}

const ActivityMessage = (props: ActivityBoxTypes) => {
  const { message } = props
  return (
    <Flex
      flexDirection='row'
      alignItems='flex-start'
      width='100%'
      marginBottom={2}
    >
      <Flex marginRight={2}>
        <FaCircleUser size={35} color='white' />
      </Flex>
      <Flex marginRight={2}>
        <Text color='darkMode.text'>{message}</Text>
      </Flex>
      <Flex>
        <FaCircle size={35} />
      </Flex>
    </Flex>
  )
}

const ActivityBox = () => {
  return (
    <Flex
      width='100%'
      backgroundColor='#262626'
      flexDirection='column'
      borderRadius={8}
      padding={6}
    >
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        marginBottom={3}
      >
        <Text color='darkMode.text' fontSize='xl'>
          Activity
        </Text>
        <Text color='darkMode.text'>See All</Text>
      </Flex>
      <Flex flexDirection='column' width='100%'>
        <ActivityMessage message='KamNotKam loved your goal. 10m' />
        <ActivityMessage message='KamNotKam loved your goal. 33m' />
        <ActivityMessage message='KamNotKam loved your goal. 2h' />
      </Flex>
    </Flex>
  )
}

export { ActivityBox }
