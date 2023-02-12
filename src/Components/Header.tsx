import React from "react";
import {
  Box,
  //   Stack,
  Heading,
  Flex,
  //   Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// @ts-ignore
import Pdf from "../assets/Saurabh_Chopda_Resume.pdf";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="transparent"
      background="white"
      color="#333"
      //   {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Saurabh Chopda
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{
            bg: "teal.400",
            borderColor: "teal.700",
          }}
        >
          <a href={Pdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
