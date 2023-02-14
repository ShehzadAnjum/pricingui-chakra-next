import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl="15px"
      bg="#6B46C1"
      pt="90px"
      pb="250"
      color="white"
    >
      <Heading pb="10px">Anjum pricing UI for you business</Heading>
      <Text>Plans that are carefully crafted to suit you business.</Text>
    </Box>
  );
}
