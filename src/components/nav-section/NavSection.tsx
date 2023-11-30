import React from 'react'
import {
  Flex,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Button,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaHouse } from 'react-icons/fa6'
import { FaBarsStaggered } from 'react-icons/fa6'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaMessage } from 'react-icons/fa6'
import { FaBookmark } from 'react-icons/fa6'
import { FaGear } from 'react-icons/fa6'
import { FaCircleUser } from 'react-icons/fa6'

const Links = [
  { id: 1, title: 'Home', route: '/home', icon: <FaHouse /> },
  { id: 2, title: 'Goals', route: '/goals', icon: <FaBarsStaggered /> },
  { id: 3, title: 'Friends', route: '/friends', icon: <FaPeopleGroup /> },
  { id: 4, title: 'Messages', route: '/messages', icon: <FaMessage /> },
  { id: 5, title: 'Bookmarks', route: '/bookmarks', icon: <FaBookmark /> },
  { id: 6, title: 'Settings', route: '/settings', icon: <FaGear /> },
]

const NavSection = () => {
  return (
    <Flex
      width='30%'
      background='darkMode.background'
      flexDirection='column'
      alignItems='center'
      paddingY={2}
    >
      <Flex
        flexDirection='column'
        alignItems='center'
        backgroundColor='#262626'
        width='80%'
        borderRadius={8}
        padding={6}
        marginBottom={4}
      >
        <Flex marginBottom={2}>
          <FaCircleUser color='white' size={55} />
        </Flex>
        <Flex marginBottom={2}>
          <Flex flexDirection='column' alignItems='center'>
            <Text color='darkMode.text' fontSize='2xl' fontWeight='bold'>
              Kam
            </Text>
            <Text color='darkMode.text'>@KamNotKam</Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection='row'
          justifyContent='space-around'
          width='100%'
          marginBottom={5}
        >
          <Flex flexDirection='column' alignItems='center'>
            <Text color='darkMode.text' fontSize='lg' fontWeight='bold'>
              6
            </Text>
            <Text color='darkMode.text' fontSize='lg'>
              Completed
            </Text>
          </Flex>
          <Flex flexDirection='column' alignItems='center'>
            <Text color='darkMode.text' fontSize='lg' fontWeight='bold'>
              12
            </Text>
            <Text color='darkMode.text' fontSize='lg'>
              Goals
            </Text>
          </Flex>
          <Flex flexDirection='column' alignItems='center'>
            <Text color='darkMode.text' fontSize='lg' fontWeight='bold'>
              546
            </Text>
            <Text color='darkMode.text' fontSize='lg'>
              Followers
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Button
            backgroundColor='darkMode.primary'
            color='darkMode.text'
            _hover={{ backgroundColor: 'darkMode.accent' }}
          >
            My Profile
          </Button>
        </Flex>
      </Flex>
      <UnorderedList
        backgroundColor='#262626'
        listStyleType='none'
        width='80%'
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        padding={8}
        margin={0}
        borderRadius={8}
      >
        {Links.map((data) => {
          return (
            <ListItem key={data.id}>
              <RouterLink to={data.route}>
                <Link
                  display='flex'
                  flexDirection='row'
                  alignItems='center'
                  color='darkMode.text'
                  fontSize='2xl'
                  textDecoration='none'
                  marginBottom={3}
                  _hover={{ color: 'darkMode.accent' }}
                >
                  <Text marginRight={2}>{data.icon}</Text>
                  <Text>{data.title}</Text>
                </Link>
              </RouterLink>
            </ListItem>
          )
        })}
      </UnorderedList>
    </Flex>
  )
}

export { NavSection }
