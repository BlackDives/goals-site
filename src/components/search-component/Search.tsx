import React from 'react'
import { Input, Button, Flex, Text } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <Flex
      border='2px solid'
      borderColor='darkMode.primary'
      height='50px'
      width='60%'
      borderRadius={8}
    >
      <Input
        placeholder='Search...'
        borderRightRadius={0}
        border='none'
        height='100%'
      />
      <Button borderLeftRadius={0} backgroundColor='transparent' height='100%'>
        <FaSearch color='darkMode.white' />
      </Button>
    </Flex>
  )
}

const Search = () => {
  return (
    <Flex flexDirection='row' justifyContent='center' width='60%' marginTop={3}>
      <SearchBar />
    </Flex>
  )
}

export { SearchBar, Search }
