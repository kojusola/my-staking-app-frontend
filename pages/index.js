import React from "react";
import * as Chakra from "@chakra-ui/react";
import Header from "../components/header";
import Body from "../components/body";

export default function Home() {
  return (
    <Chakra.Box>
      <Header />
      <Body />
    </Chakra.Box>
  );
}
