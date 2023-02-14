import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import BackArrow from "./icons/BackArrow";
import IconStar from "./icons/IconStar";
import iconStripStars from "./icons/iconStripStars";

export default function Features() {
  return (
    <Box maxW="800px" m="auto" mt="25px" px="50px">
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <HStack mb="20px">
          <Icon as={IconStar} />
          <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack mb="20px">
          <Icon as={iconStripStars} />
          <Text>No setup fee 100% hassle-free</Text>
        </HStack>

        <HStack mb="20px">
          <Icon as={BackArrow} />
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
