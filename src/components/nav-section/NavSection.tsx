import React from 'react'
import { Flex, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import { FaHouse } from 'react-icons/fa6'
import { FaBarsStaggered } from 'react-icons/fa6'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaMessage } from 'react-icons/fa6'
import { FaBookmark } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa6'
import { FaGear } from 'react-icons/fa6'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Links = [
  { id: 1, title: 'Home', route: '#', icon: <FaHouse /> },
  { id: 2, title: 'Search', route: '#', icon: <FaMagnifyingGlass /> },
  { id: 3, title: 'Goals', route: '#', icon: <FaBarsStaggered /> },
  { id: 4, title: 'Friends', route: '#', icon: <FaPeopleGroup /> },
  { id: 5, title: 'Messages', route: '#', icon: <FaMessage /> },
  { id: 6, title: 'Bookmarks', route: '#', icon: <FaBookmark /> },
  { id: 7, title: 'Profile', route: '#', icon: <FaUser /> },
  { id: 8, title: 'Settings', route: '#', icon: <FaGear /> },
]

const NavSection = () => {
  return (
    <Flex
      width='30%'
      background='darkMode.background'
      flexDirection='column'
      alignItems='center'
      borderRight='2px solid'
      borderColor='darkMode.primary'
      paddingY={2}
    >
      <UnorderedList
        listStyleType='none'
        width='50%'
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        paddingLeft={0}
        margin={0}
      >
        {Links.map((data) => {
          return (
            <ListItem key={data.id}>
              <Link
                display='flex'
                flexDirection='row'
                alignItems='center'
                color='darkMode.text'
                fontSize='2xl'
                textDecoration='none'
                marginBottom={3}
                _hover={{ color: 'darkMode.primary' }}
              >
                <Text marginRight={2}>{data.icon}</Text>
                <Text>{data.title}</Text>
              </Link>
            </ListItem>
          )
        })}
      </UnorderedList>
    </Flex>
  )
}

export { NavSection }
