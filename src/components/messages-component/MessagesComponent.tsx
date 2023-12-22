import React, { useState, useEffect, useRef } from 'react'
import firebase from 'firebase/compat/app'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { auth, database } from '../../server/index'
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore'
import { MessagePreview } from './MessagePreview'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { FaArrowRight } from 'react-icons/fa6'

type FetchedMessagesType = {
  id: string
  userID: string | null
  text: string | null
  name: string | null
  avatar: string | null
  createdAt: firebase.firestore.Timestamp
}

const MessagesComponent = () => {
  const [message, setMessage] = useState<string>()
  const [messages, setMessages] = useState<FetchedMessagesType[]>()

  useEffect(() => {
    const q = query(
      collection(database, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50)
    )

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: FetchedMessagesType[] = []
      QuerySnapshot.forEach((doc) => {
        let data = doc.data()

        fetchedMessages.push({
          id: doc.id,
          userID: data.userID,
          text: data.text,
          name: data.name,
          avatar: data.avatar,
          createdAt: data.createdAt,
        })
      })

      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt.seconds - b.createdAt.seconds
      )
      setMessages(sortedMessages)
    })
  }, [])

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (message?.trim() === '') {
      alert('Enter valid message')
      return
    }

    if (!auth.currentUser) return

    const { uid, displayName, photoURL } = auth.currentUser

    await addDoc(collection(database, 'messages'), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      userID: uid,
    })

    setMessage('')
  }
  return (
    <Flex flexDirection='column' height='70vh' width='100%'>
      <Flex>
        <Text fontSize='3xl' color='darkMode.text'>
          Messages
        </Text>
      </Flex>
      <Flex height='100%' width='100%'>
        <Flex
          flexDirection='column'
          height='100%'
          width='70%'
          backgroundColor='#262626'
          marginRight={6}
          padding={4}
          borderRadius={8}
        >
          <Flex height='5%' marginBottom={5}>
            <Text color='darkMode.text' fontSize='xl'>
              Chezem Cheese
            </Text>
          </Flex>
          <Flex height='90%' flexDirection='column' justifyContent='flex-start'>
            {messages?.map((message) => {
              console.log(message)
              console.log(auth.currentUser?.uid)
              return message.userID == auth.currentUser?.uid ? (
                <OutgoingMessage message={message.text} />
              ) : (
                <IncomingMessage message={message.text} />
              )
            })}
            {/*  <IncomingMessage message='Hey! Congrats on your new goal kam!' />
            <IncomingMessage message='What do you have planned next? :3' />
            <Flex width='100%' flexDirection='row' justifyContent='flex-end'>
              <OutgoingMessage message='Shiiiii' />
  </Flex> */}
          </Flex>
          <Flex height='5%'>
            <form
              style={{ width: '100%' }}
              onSubmit={(event) => sendMessage(event)}
            >
              <Flex
                backgroundColor='darkMode.background'
                borderRadius={25}
                padding={1}
              >
                <Input
                  id='messageInput'
                  name='messageInput'
                  type='text'
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  placeholder='Type your message...'
                  border='none'
                  backgroundColor='darkMode.background'
                  borderRadius={25}
                  color='white'
                />
                <Button
                  type='submit'
                  backgroundColor='darkMode.primary'
                  color='white'
                  borderRadius={25}
                >
                  <FaArrowRight />
                </Button>
              </Flex>
            </form>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          alignItems='center'
          background='#262626'
          padding={6}
          borderRadius={8}
          width='30%'
        >
          <form style={{ width: '100%' }}>
            <Flex width='100%'>
              <Input
                placeholder='Search...'
                border='none'
                background='darkMode.background'
                borderRadius={25}
              />
            </Flex>
          </form>
          <Flex flexDirection='column'>
            <MessagePreview />
            <MessagePreview />
            <MessagePreview />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { MessagesComponent }
