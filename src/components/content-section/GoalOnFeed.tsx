import React from 'react'
import { Flex, Text, Button } from '@chakra-ui/react'

const GoalOnFeed = () => {
  return (
    <Flex
      flexDirection='column'
      borderBottom='2px solid'
      borderColor='darkMode.primary'
      padding={2}
      minHeight='20vh'
      justifyContent='space-between'
    >
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        width='100%'
        marginBottom={2}
      >
        <Text color='darkMode.primary' fontWeight='bold' fontSize='2xl'>
          Bulk up 10lbs over the next 3 months
        </Text>
        <Text color='darkMode.text'>KamNotKam</Text>
      </Flex>
      <Flex marginBottom={2}>
        <Text color='darkMode.text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
          tortor pharetra, rutrum odio a, ultricies nibh. Donec tincidunt eget
          justo at eleifend. Vivamus blandit augue non augue tempor, ut
          tristique risus porttitor. Nam sollicitudin, est vitae porttitor
          tincidunt, magna arcu sagittis leo, nec malesuada mauris sem ac purus.
          Sed a arcu vel massa malesuada cursus.
        </Text>
      </Flex>
      <Flex
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Text color='darkMode.primary' fontSize='xl' fontWeight='bold'>
          Progress: 65%
        </Text>
        <Button
          backgroundColor='darkMode.primary'
          color='darkMode.text'
          _hover={{ backgroundColor: 'darkMode.accent' }}
        >
          View
        </Button>
      </Flex>
    </Flex>
  )
}

export { GoalOnFeed }
