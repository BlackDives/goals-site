import { Flex } from '@chakra-ui/react'
import { Search } from '../components/search-component/Search'
import { SuggestedSection } from '../components/suggested-section/SuggestedSection'

export function SearchRoute() {
  return (
    <Flex width='70%'>
      <Search />
      <SuggestedSection />
    </Flex>
  )
}
