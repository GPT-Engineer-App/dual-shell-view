import React from "react";
import { Box, Flex, VStack, Icon, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FaCloud, FaUser, FaCommentAlt, FaBell, FaCog, FaQuestionCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Flex h="100vh">
      {/* Left Section */}
      <Box bg="black" w="30%">
        {/* Sidebar */}
        <VStack spacing={8} p={4} align="left">
          <Icon as={FaCloud} color="teal.400" boxSize={8} />
          <VStack spacing={4}>
            <Icon as={FaUser} color="white" />
            <Icon as={FaCommentAlt} color="white" />
            <Icon as={FaBell} color="white" />
            <Icon as={FaCog} color="white" />
          </VStack>
          <Box flex={1} />
          <Icon as={FaQuestionCircle} color="white" />
        </VStack>

        {/* Main Area of Left Section */}
        <Box p={4} color="white">
          <Text>$ _</Text>
        </Box>
      </Box>

      {/* Right Section */}
      <Box bg="gray.800" w="70%">
        {/* Tabs */}
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>Shell</Tab>
            <Tab _selected={{ color: "white", bg: "gray.700" }}>Browser</Tab>
            <Tab>Editor</Tab>
            <Tab>Planner</Tab>
          </TabList>

          {/* Main Area of Right Section */}
          <TabPanels>
            <TabPanel>
              <Flex>
                <Box w="50%" p={4} color="white">
                  <Text>$ _</Text>
                </Box>
                <Box w="50%" p={4}>
                  <Box bg="blue.200" p={2} borderRadius="md">
                    <Text color="black">Devin is waiting to start up. Hey Devin, i'd like for you to benchmark Llama 2 on three different provide[...]</Text>
                  </Box>
                </Box>
              </Flex>
              <Flex justify="flex-end" p={2} color="white">
                <Text>00</Text>
                <Text ml={4}>K</Text>
                <Text ml={4}>Live</Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Index;
