import { Flex } from '@chakra-ui/react'
import { MyGoals } from '../components/my-goals/MyGoals'

export function GoalsRoute() {
  return (
    <Flex width='70%'>
      <MyGoals />
    </Flex>
  )
}
