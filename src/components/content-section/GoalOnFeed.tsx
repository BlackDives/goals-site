import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'
import {
  FaCircleUser,
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaShareFromSquare,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
} from 'react-icons/fa6'

const GoalOnFeed = () => {
  const text =
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id tortor pharetra, rutrum odio a, ultricies nibh. Donec tincidunt eget justo at eleifend. Vivamus blandit augue non augue tempor, uttristique risus porttitor. Nam sollicitudin, est vitae porttitortincidunt, magna arcu sagittis leo, nec malesuada mauris sem ac purus. Sed a arcu vel massa malesuada cursus.'
  const shortenedText = text.slice(0, 250)
  return (
    <Flex
      flexDirection='column'
      backgroundColor='#262626'
      padding={4}
      marginBottom={5}
      minHeight='20vh'
      justifyContent='space-between'
      borderRadius={8}
    >
      <Flex
        flexDirection='row'
        justifyContent='flex-start'
        alignItems='center'
        width='100%'
        marginBottom={2}
      >
        <Flex marginRight={2}>
          <FaCircleUser color='white' size={50} />
        </Flex>
        <Text color='darkMode.primary' fontWeight='bold' fontSize='2xl'>
          Bulk up 10lbs over the next 3 months
        </Text>
      </Flex>
      <Flex marginBottom={2}>
        <Text color='darkMode.text'>
          {text.length > 250 ? `${shortenedText}.......` : text}
        </Text>
      </Flex>
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='flex-end'
      >
        <Flex flexDirection='column' width='35%'>
          <Text color='darkMode.text' fontWeight='semibold' marginBottom={2}>
            KamNotKam
          </Text>

          <Flex backgroundColor='darkMode.background' borderRadius={25}>
            <Flex
              flexDirection='row'
              backgroundColor='darkMode.primary'
              color='darkMode.text'
              borderRadius={25}
              width='25%'
              height='35px'
              justifyContent={'flex-start'}
              alignItems='center'
              padding={3}
            >
              Progress
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDirection='row' alignItems='flex-end'>
          <Flex>
            <Button background='transparent'>
              <FaRegHeart size={25} color='white' />
            </Button>
            <Button background='transparent'>
              <FaRegComment size={25} color='white' />
            </Button>
            <Button background='transparent'>
              <FaRegBookmark size={25} color='white' />
            </Button>
          </Flex>
          <Button
            backgroundColor='darkMode.primary'
            color='darkMode.text'
            _hover={{ backgroundColor: 'darkMode.accent' }}
          >
            View
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { GoalOnFeed }
