import React from "react";

import { Flex, Image, Text } from "@chakra-ui/react";

import style from "./sidebarItem.module.css";

import addIcon from "assets/icons/add.svg";
import logoutIcon from "assets/icons/logout.svg";

const sidebarItem = ({ navbar }) => {
  return (
    <>
      <Flex
        className={`${style["navbar-item"]} ${style["active"]}`}
        mt={2}
        w="100%"
        h="40px"
        alignItems="center"
      >
        <Image src={addIcon} w="20px" mr="20px" ml="20px" />
        <Text fontSize="14px">{navbar ? "" : "Create Playlist"}</Text>
      </Flex>
      <Flex
        className={style["navbar-item"]}
        mt={2}
        w="100%"
        h="40px"
        alignItems="center"
      >
        <Image src={logoutIcon} w="20px" mr="20px" ml="20px" />
        <Text fontSize="14px">{navbar ? "" : "Logout"}</Text>
      </Flex>
    </>
  );
};

export default sidebarItem;
