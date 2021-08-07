import React from "react";

import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";

const NavItem = ({ navbar, icon, title, active }) => {
  return (
    <Flex
      mt={5}
      flexDir="column"
      w="100%"
      alignItems={navbar ? "center" : "flex-start"}
      justifyContent="center"
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#AEC8CA"}
          p={2}
          borderRadius={8}
          w={navbar === false && "100%"}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" />
              <Text ml={5} display={navbar ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
