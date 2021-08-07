import React from "react";
import { Flex, Button, Input, InputGroup, Text } from "@chakra-ui/react";

type SearchTrack = {
  search: string;
  setSearch: (query: string) => void;
  buttonHandleSearch: React.MouseEventHandler<HTMLButtonElement>;
};

const SearchBar = ({ search, setSearch, buttonHandleSearch }: SearchTrack) => {
  return (
    <Flex flexDir="column">
      <Text mt={3} mb={2}>
        Lets find something for your new playlist
      </Text>
      <InputGroup>
        <Input
          id="input-search"
          placeholder="Search.."
          size="md"
          variant="filled"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          mr="5"
        />
        <Button
          id="btn-search"
          onClick={buttonHandleSearch}
          size="md"
          width="150px"
        >
          Search
        </Button>
      </InputGroup>
    </Flex>
  );
};

export default SearchBar;
