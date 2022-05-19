import React from 'react';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { ChatState } from "../context/chatProvider";
import ChatBox from '../miscellaneous/ChatBox';
import MyChats from '../miscellaneous/MyChats';
import SideDrawer from '../miscellaneous/SideDrawer';
const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  
  
  return (
    <div style={{
      width: '100%',
    }}>
      {user && <SideDrawer/>}
      <Box d="flex" 
        justifyContent={"space-between"}
         width={"100%"}
          p={4}
       
          height={"91.5vh"}
        >
        {user && <MyChats fetchAgain={fetchAgain}  />}
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/> }
      </Box>
      </div>
  )
}

export default ChatPage