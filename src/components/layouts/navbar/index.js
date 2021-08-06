import React from "react";

// ? lib third party
import { Flex, Box, Spacer, Button, Heading } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// ? reducer
import { logout } from "redux/userSlice";
const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <Flex bg="orange.300" alignItems="center" width="100vw">
      <Box p="4">
        <Heading as="h3" size="lg" color="black">
          Spotify
        </Heading>
      </Box>
      <Spacer />
      <Box p="4">
        <Button size="sm">Profile</Button>
      </Box>
      <Box p="4">
        <Button onClick={handleLogoutClick} size="sm">
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
