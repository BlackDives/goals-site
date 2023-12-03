import React from 'react'
import {
  Grid,
  GridItem,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { GoalBox } from './GoalBox'

const GoalStatus = [
  { id: 1, status: 'All' },
  { id: 2, status: 'Started' },
  { id: 3, status: 'Completed' },
  { id: 4, status: 'Planned' },
]

const MyGoals = () => {
  return (
    <Flex flexDirection='column' width='100%'>
      <Flex
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Text color='darkMode.text' fontSize='3xl'>
          My Goals
        </Text>
        <Button backgroundColor='darkMode.primary' color='darkMode.text'>
          Create
        </Button>
      </Flex>
      <Flex marginBottom={2}>
        <UnorderedList
          display='flex'
          flexDirection='row'
          listStyleType='none'
          margin={0}
          padding={0}
        >
          {GoalStatus.map((goalStatus) => (
            <ListItem key={goalStatus.id} marginRight={2}>
              <Flex>
                <Text color='darkMode.text' fontSize='lg'>
                  {goalStatus.status}
                </Text>
              </Flex>
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        <GoalBox />
        <GoalBox />
        <GoalBox />
        <GoalBox />
        <GoalBox />
        <GoalBox />
      </Grid>
    </Flex>
  )
}

export { MyGoals }
