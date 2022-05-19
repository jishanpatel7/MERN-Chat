import React,{useEffect,useState} from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
} from "@chakra-ui/react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  const history = useHistory();
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
        if (!userInfo) history.push("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [history]);
  return (
    <Container maxW={"xl"} centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        p={3}
        bg={"#fff"}
        borderRadius={"md"}
        boxShadow={"0px 0px 10px rgba(0,0,0,0.1)"}
        borderWidth={"1px"}
        w={"100%"}
        m={"40px 0 15px 0"}
      >
        <Text fontSize={"2xl"}>Talk-A-Tive</Text>
      </Box>
      <Box
        bg={"white"}
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth={"1px"}
        boxShadow={"0px 0px 10px rgba(0,0,0,0.2)"}
      >
        <Tabs variant="soft-rounded" >
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
           <Login/>
            </TabPanel>
            <TabPanel>
            <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
