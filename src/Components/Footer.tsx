import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      target="_blank"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function FooterComponent() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      style={{ marginTop: "30px" }}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Designed and Developed by © Saurabh Chopda 2022</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Github"}
            href={"https://www.github.com/saurabhchopda"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/saurabh-chopda"}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
