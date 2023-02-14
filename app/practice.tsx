import React from "react";
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";

export default function Practice() {
  return (
    <>
      <ChakraProvider>
        <h1>Hello</h1>
        <h2>World</h2>
        <p> This was hello world </p>
        <Heading>This is Chakra heading</Heading>
        <Text>This is Chakra texts</Text>
        <Heading as="h3" color={"red"} fontWeight="black">
          Headin 1 by Chakra
        </Heading>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "lightskyblue",
            height: "200px",
          }}
        >
          <div
            style={{
              backgroundColor: "lightgreen",
              padding: "50px",
              color: "black",
              height: "50px",
            }}
          >
            {" "}
            DIV 1{" "}
          </div>
          <div
            style={{
              backgroundColor: "lightblue",
              padding: "50px",
              color: "black",
              height: "50px",
            }}
          >
            {" "}
            DIV 2{" "}
          </div>
          <div
            style={{
              backgroundColor: "orange",
              padding: "50px",
              color: "black",
              height: "50px",
            }}
          >
            {" "}
            DIV 3{" "}
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}
