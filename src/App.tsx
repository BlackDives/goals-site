import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar/NavBar";

function App() {
  return (
    <Flex>
      <Flex flexDirection="column">
        <Flex>
          <NavBar />
        </Flex>
        <Flex>
          <Flex>
            <Text>Chez</Text>
          </Flex>
          <Flex>
            <Text></Text>
          </Flex>
        </Flex>
        <Flex>Section Two</Flex>
        <Flex>Section Three</Flex>
      </Flex>
    </Flex>
  );
}

export default App;
