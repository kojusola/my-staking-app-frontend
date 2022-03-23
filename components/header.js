import React from "react";
import * as Chakra from "@chakra-ui/react";
import { utils } from "ethers";

export default function Header() {
  return (
    <Chakra.Box
      backgroundColor="#6F3772"
      paddingTop="35px"
      paddingBottom="26px"
      px="50px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Chakra.Text
        color="#FFFFFF"
        fontWeight="500"
        fontSize="24px"
        lineHeight="28px"
      >
        WEB3STAKING
      </Chakra.Text>
      <Chakra.Box
        backgroundColor="#FFFFFF"
        px="34px"
        py="16px"
        boxShadow="0px 2px 42px rgba(0, 0, 0, 0.25)"
        borderRadius="5px"
      >
        <Chakra.Text
          color="#712B75"
          fontWeight="500"
          fontSize="24px"
          lineHeight="28px"
          margin="0px"
        >
          Connect Wallet
        </Chakra.Text>
      </Chakra.Box>
    </Chakra.Box>
  );
}
