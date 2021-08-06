import React, { useEffect } from "react";

// ?lib third party
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// ? api
import { loginAuthorizeSpotify, getAccessTokenFromURL } from "api/authSpotify";
import { getProfile } from "api/apiSpotify";

// ! reducer area
import { login, storeUserData } from "redux/userSlice";

// ? style import css
import { Flex, Heading, Text, Button } from "@chakra-ui/react";

const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      dispatch(login(access_token));
      getProfile(access_token).then((data) => dispatch(storeUserData(data)));
      history.push("/create-playlist");
    }
  }, [dispatch, history]);

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        background="gray.100"
        p={20}
        rounded={20}
        alignItems="center"
      >
        <Heading mb={6}>WITHOUT MUSIC, LIFE WOULD BE A MISTAKE</Heading>
        <Text mb={5}>
          Music gives a soul to the universe, wing to the mind, flight to the
          imagination and life to everything.
        </Text>
        <Button
          onClick={loginAuthorizeSpotify}
          colorScheme="pink"
          variant="solid"
          width="200px"
        >
          Please Login First
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
