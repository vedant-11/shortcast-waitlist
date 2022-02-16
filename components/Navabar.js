import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();
  return (
    <div className=" z-50 shadow-cyan-500/50 flex flex-row mt-8 items-center  w-screen justify-between fixed top-[-34px] h-20 left-0 right-0">
      <span className="text-3xl font-bold  ml-24 overflow-hidden poppins font-semibold sm:mx-5 sm:text-3xl ">
        Beat
      </span>
      <button
        onClick={onOpen}
        className=" hover:bg-[#C9C9C9] poppins font-regular bg-[#F8F9FA] text-[#192024] w-40 h-10 rounded-md mr-24 sm:mr-5"
      >
        Join the waitlist
      </button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Join the Waitlist!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                focusBorderColor="gray.400"
                ref={initialRef}
                placeholder="Enter your email"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <button className=" hover:bg-[#C9C9C9] poppins font-regular bg-[#F8F9FA] text-[#192024] w-40 h-10 rounded-md ">
              Join the waitlist
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Navbar;
