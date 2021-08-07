import React, { useState } from "react";

import {
  Flex,
  Divider,
  Heading,
  Text,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiFilePlus } from "react-icons/fi";

import userIcon from "assets/icons/user.svg";
import NavItem from "../navItem";

const Sidebar = () => {
  const [navbar, setnavbar] = useState(true);

  const handleNavbarClick = () => {
    setnavbar(!navbar);
  };

  return (
    <Flex
      pos="fixed"
      h="100vh"
      w={navbar ? "75px" : "200px"}
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navbar ? "center" : "flex-start"}
      >
        <IconButton mt={5} icon={<FiMenu />} onClick={handleNavbarClick} />

        <NavItem navbar={navbar} icon={FiHome} title="Home" active />
        <NavItem navbar={navbar} icon={FiFilePlus} title="Create Playlist" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navbar ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navbar ? "none" : "flex"} />
        <Flex mt={4}>
          <Avatar src={userIcon} size="sm" />
          <Flex flexDir="column" ml={4} display={navbar ? "none" : "flex"}>
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
  );
};

export default Sidebar;
