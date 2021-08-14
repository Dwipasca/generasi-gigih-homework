import React from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";

type TypeModal = {
  handleFormSubmit : any,
  postPlaylist:any,
  setPostPlaylist:any
  isOpen:any
  onClose:any
}

const ModalFormPlaylist = ({
  handleFormSubmit,
  postPlaylist,
  setPostPlaylist,
  isOpen,
  onClose,
}:TypeModal ) => {

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setPostPlaylist({ ...postPlaylist, [name]: value });
  };

  return (
    <Modal
      
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <form onSubmit={handleFormSubmit}>
        <ModalContent>
          <ModalHeader>Create Playlist</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Playlist Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="text"
                minLength={10}
                value={postPlaylist.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                id="description"
                name="description"
                minLength={20}
                value={postPlaylist.description}
                onChange={handleChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="green" mr={3} onClick={onClose}>
              Create New Playlist
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default ModalFormPlaylist;
