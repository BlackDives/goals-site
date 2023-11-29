import { Flex } from '@chakra-ui/react'
import { ContentSection } from '../components/content-section/ContentSection'
import { SuggestedSection } from '../components/suggested-section/SuggestedSection'

export function Home() {
  return (
    <Flex width='70%'>
      <ContentSection />
      <SuggestedSection />
    </Flex>
  )
}
