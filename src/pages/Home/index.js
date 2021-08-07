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

import style from "./home.module.css";

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
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="flex-start"
      className={style["home-background"]}
    >
      <Flex
        flexDirection="column"
        p={10}
        alignItems="flex-start"
        color="whitesmoke"
      >
        <Heading as="h4" size="2xl">
          WITHOUT MUSIC, LIFE
        </Heading>
        <Heading mb={5} as="h2" size="2xl">
          WOULD BE A MISTAKE
        </Heading>
        <Text>Music gives a soul to the universe, wings to the mind,</Text>
        <Text mb={5}>flight to the imagination and life to everything.</Text>
        <Button
          className={style["btn-login"]}
          id="btn-login"
          onClick={loginAuthorizeSpotify}
          variant="solid"
          width="200px"
          colorScheme="yellow"
          type="button"
        >
          Please Login First
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
