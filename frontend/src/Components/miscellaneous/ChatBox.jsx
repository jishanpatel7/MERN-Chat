import React from 'react'
import { ChatState } from '../context/chatProvider';
import ChatLoading from './ChatLoading';
import { Button, useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Box, Text, Stack } from '@chakra-ui/react';
import SingleChat from '../SingleChat';
const ChatBox = ({fetchAgain, setFetchAgain}) => {
  const {selectedChat } = ChatState();
  const toast = useToast();

  return (
   <Box  d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
   alignItems="center"
   flexDir="column"
   p={3}
   bg="white"
   w={{ base: "100%", md: "68%" }}
   borderRadius="lg"
   borderWidth="1px">
     <SingleChat
       fetchAgain={fetchAgain} 
       setFetchAgain={setFetchAgain}
     />
   </Box>
  )
}

export default ChatBox;