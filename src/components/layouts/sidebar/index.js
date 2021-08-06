import { Flex, Divider, Heading, Text, Avatar, Button } from "@chakra-ui/react";
import React from "react";

import userIcon from "assets/icons/user.svg";

const Sidebar = () => {
  return (
    <div>
      <Flex
        pos="sticky"
        h="100vh"
        w="200px"
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
        flexDir="column"
        justifyContent="space-between"
        backgroundColor="orange.300"
      >
        <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
          <Button mt={5}>=</Button>
        </Flex>
        <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
          <Divider />
          <Flex mt={4}>
            <Avatar src={userIcon} size="sm" />
            <Flex flexDir="column" ml={4}>
              <Heading as="h3" size="sm">
                Dwi Pasca
              </Heading>
              <Text color="gray" size="sm">
                User
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Sidebar;
