import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkMarkicon from "./icons/checkMarkicon";

export default function Pricing() {
  return (
    <Box
      maxW="950px"
      mx={{ base: "10px", lg: "auto" }}
      //ml={{ base: "10px", lg: "auto" }}
      //mr={{ base: "10px", lg: "auto" }}
      mt="-170px"
      bg="white"
      //mx={{ base: "20px" }}
      //mx={{ base: "20px", md: "0px", lg: "0px" }}
      borderRadius={"16px"}
      overflow="hidden"
      boxShadow={
        "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
      }
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box textAlign="center" p="40px" bgColor="#cbb8ee">
          <Text fontSize="24px" fontWeight="bold">
            Premium PRO
          </Text>
          <Heading fontSize="60px">$735 </Heading>
          <Text> billed just once</Text>
          <Button mt="20px" w="300px" bg="#805AD5" color="white">
            {" "}
            Get Started
          </Button>
        </Box>
        <Box pt="50px" pl="25px" pr="25px">
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mt="15px">
            <Icon as={checkMarkicon} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mt="15px">
            <Icon as={checkMarkicon} />
            <Text>Additional phone numters</Text>
          </HStack>
          <HStack mt="15px">
            <Icon as={checkMarkicon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack mt="15px">
            <Icon as={checkMarkicon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
