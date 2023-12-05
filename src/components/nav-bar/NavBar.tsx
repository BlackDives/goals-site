import React, { useState } from 'react'
import { auth } from '../../server'
import { useAuthState } from 'react-firebase-hooks/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { Flex, Text, Input, Button } from '@chakra-ui/react'
import { FaCircleUser } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'

const NavBar = () => {
  const [user] = useAuthState(auth)

  const signOut = () => {
    auth.signOut()
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  }
  return (
    <Flex
      flexDirection='row'
      justifyContent='space-around'
      alignItems='center'
      width='100%'
      height='100px'
      backgroundColor='#262626'
      marginBottom={3}
      position='sticky'
      top={0}
      zIndex={3}
    >
      <Flex
        height='100%'
        width='20%'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
      >
        <Flex flexDirection='row' width='50%' justifyContent='flex-start'>
          <Text fontSize='50px' color={'darkMode.primary'}>
            Wati
          </Text>
        </Flex>
      </Flex>
      <Flex
        height='100%'
        width='60%'
        flexDirection='row'
        alignItems='center'
        justifyContent='flex-start'
      >
        <Flex height='50px' width='55%'>
          <Button
            display='flex'
            flexDirection='row'
            justifyContent='flex-end'
            backgroundColor='#131313'
            height='100%'
            borderRightRadius={0}
            borderLeftRadius={25}
            padding={0}
          >
            <FaSearch color='gray' />
          </Button>
          <Input
            placeholder={`Search...`}
            height='100%'
            width='90%'
            border='none'
            backgroundColor='#131313'
            borderLeftRadius={0}
            borderRightRadius={25}
            paddingLeft={2}
            _placeholder={{ color: 'gray' }}
          />
        </Flex>
      </Flex>
      <Flex width='20%'>
        {user ? (
          <Button onClick={signOut} background='transparent'>
            <FaCircleUser size={45} color='white' />
          </Button>
        ) : (
          <Button
            backgroundColor='darkMode.primary'
            color='darkMode.text'
            _hover={{ backgroundColor: 'darkMode.accent' }}
            onClick={googleSignIn}
          >
            Sign In
          </Button>
        )}
      </Flex>
    </Flex>
  )
}

export { NavBar }
