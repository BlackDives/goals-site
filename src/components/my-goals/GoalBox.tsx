import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import {
  FaRegHeart,
  FaRegComment,
  FaRegClock,
  FaBars,
  FaEllipsisVertical,
  FaBorderAll,
} from 'react-icons/fa6'

type GoalTagProps = {
  tagName: string
  color: string
}

const GoalTag = (props: GoalTagProps) => {
  const { tagName, color } = props
  return (
    <Flex
      backgroundColor={color}
      width='50px'
      marginRight={2}
      borderRadius={8}
      alignItems='center'
      justifyContent='center'
      paddingX={2}
    >
      <Text color='darkMode.text' fontSize='sm'>
        {tagName}
      </Text>
    </Flex>
  )
}

const GoalBox = () => {
  return (
    <Flex
      flexDirection='column'
      alignItems='space-between'
      height='300px'
      width='300px'
      backgroundColor='#262626'
      borderRadius={8}
      padding={4}
    >
      <Flex flexDirection='column' height='70%'>
        <Flex>
          <Text color='darkMode.text'>11/24/2023</Text>
        </Flex>
        <Flex marginBottom={2}>
          <Text color='darkMode.text' fontSize='xl' fontWeight='bold'>
            Bulk up 10lbs in 3 months
          </Text>
        </Flex>
        <Flex width='100%'>
          <GoalTag tagName='bulking' color='purple' />
          <GoalTag tagName='fitness' color='green' />
          <GoalTag tagName='lifting' color='orange' />
        </Flex>
      </Flex>
      <Flex flexDirection='column'>
        <Flex marginBottom={1}>
          <Text color='darkMode.text'>Progress: 35%</Text>
        </Flex>
        <Flex
          backgroundColor='darkMode.background'
          width='100%'
          height='10px'
          borderRadius={8}
          marginBottom={4}
        >
          <Flex
            backgroundColor='darkMode.primary'
            width='35%'
            borderRadius={8}
          />
        </Flex>
        <Flex
          width='100%'
          height='30%'
          flexDirection='row'
          justifyContent='space-between'
        >
          <Flex>
            <Flex flexDirection='row' alignItems='center' marginRight={4}>
              <FaRegHeart color='white' size={25} />
              <Text color='darkMode.text' marginLeft={2}>
                4
              </Text>
            </Flex>
            <Flex flexDirection='row' alignItems='center'>
              <FaRegComment color='white' size={25} />
              <Text color='darkMode.text' marginLeft={2}>
                7
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex
              backgroundColor='darkMode.primary'
              flexDirection='row'
              alignItems='center'
              borderRadius={15}
              padding={1}
            >
              <FaRegClock color='#422659' />
              <Text color='#422659' marginLeft={1}>
                6 weeks left
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { GoalBox }
