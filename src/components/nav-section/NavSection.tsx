import React from 'react'
import { Flex, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react'

const Links = [
  { id: 1, title: 'Home', route: '#' },
  { id: 2, title: 'Goals', route: '#' },
  { id: 3, title: 'Friends', route: '#' },
  { id: 4, title: 'Messages', route: '#' },
  { id: 5, title: 'Bookmarks', route: '#' },
  { id: 6, title: 'Profile', route: '#' },
  { id: 7, title: 'Settings', route: '#' },
]

const NavSection = () => {
  return (
    <Flex width='20%' background='darkMode.background'>
      <UnorderedList
        listStyleType='none'
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        {Links.map((data) => {
          return (
            <ListItem key={data.id}>
              <Link
                color='darkMode.text'
                fontSize='xl'
                textDecoration='none'
                _hover={{ color: 'darkMode.primary' }}
              >
                {data.title}
              </Link>
            </ListItem>
          )
        })}
      </UnorderedList>
    </Flex>
  )
}

export { NavSection }
