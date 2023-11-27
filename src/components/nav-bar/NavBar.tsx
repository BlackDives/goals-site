import React from "react";
import { Flex, Text, UnorderedList, ListItem, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex>
      <Flex>
        <Text>Goals</Text>
      </Flex>
      <Flex>
        <Flex backgroundColor="gray" width="50px" height="50px" />
      </Flex>
    </Flex>
  );
};

export { NavBar };
