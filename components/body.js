import React from "react";
import * as Chakra from "@chakra-ui/react";

export default function Body() {
  const stakes = [
    {
      SN: "1",
      date: "12/03/22",
      amountStaked: "$80,000",
      running: "5days",
      yield: "$10,000",
      totalYield: "$100,000",
    },
    {
      SN: "2",
      date: "12/03/22",
      amountStaked: "$80,000",
      running: "5days",
      yield: "$10,000",
      totalYield: "$100,000",
    },
    {
      SN: "3",
      date: "12/03/22",
      amountStaked: "$80,000",
      running: "5days",
      yield: "$10,000",
      totalYield: "$100,000",
    },
  ];
  return (
    <Chakra.Box px="50px" py="79px">
      <Chakra.Box display="flex" alignItems="center">
        <Chakra.Text
          color="#F10086"
          pr="8px"
          fontWeight="600"
          fontSize="24px"
          lineHeight="28px"
        >
          MY STAKE
        </Chakra.Text>
        <Chakra.Box
          backgroundColor="#37E63E"
          borderRadius="10px"
          width="10px"
          height="10px"
        ></Chakra.Box>
      </Chakra.Box>

      <Chakra.Box
        backgroundColor="#7E4788"
        paddingBottom="27px"
        borderRadius="10px"
      >
        <Chakra.Box
          py="26px"
          display="flex"
          paddingLeft="40px"
          paddingRight="18px"
        >
          <Chakra.Box
            width="100%"
            maxWidth="5%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Chakra.Text
              color="#FFFFFF"
              fontWeight="600"
              fontSize="24px"
              lineHeight="28px"
            >
              S/N
            </Chakra.Text>
          </Chakra.Box>
          <Chakra.Box
            width="100%"
            maxWidth="15%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Chakra.Text
              color="#FFFFFF"
              fontWeight="600"
              fontSize="24px"
              lineHeight="28px"
            >
              DATE STARTED
            </Chakra.Text>
          </Chakra.Box>
          <Chakra.Box
            width="100%"
            maxWidth="20%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Chakra.Text
              color="#FFFFFF"
              fontWeight="600"
              fontSize="24px"
              lineHeight="28px"
            >
              AMOUNT STAKED
            </Chakra.Text>
          </Chakra.Box>
          <Chakra.Box
            width="100%"
            maxWidth="15%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Chakra.Text
              color="#FFFFFF"
              fontWeight="600"
              fontSize="24px"
              lineHeight="28px"
            >
              RUNNING
            </Chakra.Text>
          </Chakra.Box>
          <Chakra.Box
            width="100%"
            maxWidth="15%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Chakra.Text
              color="#FFFFFF"
              fontWeight="600"
              fontSize="24px"
              lineHeight="28px"
            >
              YIELD
            </Chakra.Text>
          </Chakra.Box>
          <Chakra.Box
            width="100%"
            maxWidth="15%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Chakra.Text
              color="#FFFFFF"
              fontWeight="600"
              fontSize="24px"
              lineHeight="28px"
            >
              TOTAL YIELD
            </Chakra.Text>
          </Chakra.Box>
        </Chakra.Box>

        {stakes.map((items, index) => {
          return (
            <Chakra.Box
              key={index}
              pt="22px"
              pb="20px"
              backgroundColor={(index + 1) % 2 == 0 ? "" : "#8A68A8"}
              display="flex"
              paddingLeft="40px"
              paddingRight="18px"
            >
              <Chakra.Box
                width="100%"
                maxWidth="5%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Chakra.Text
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="18px"
                  lineHeight="21px"
                >
                  {items.SN}
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box
                width="100%"
                maxWidth="15%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Chakra.Text
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="18px"
                  lineHeight="21px"
                >
                  {items.date}
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box
                width="100%"
                maxWidth="20%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Chakra.Text
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="18px"
                  lineHeight="21px"
                >
                  {items.amountStaked}
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box
                width="100%"
                maxWidth="15%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Chakra.Text
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="18px"
                  lineHeight="21px"
                >
                  {items.running}
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box
                width="100%"
                maxWidth="15%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Chakra.Text
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="18px"
                  lineHeight="21px"
                >
                  {items.yield}
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box
                width="100%"
                maxWidth="15%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Chakra.Text
                  color="#FFFFFF"
                  fontWeight="600"
                  fontSize="18px"
                  lineHeight="21px"
                >
                  {items.totalYield}
                </Chakra.Text>
              </Chakra.Box>
              <Chakra.Box
                width="100%"
                maxWidth="15%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Chakra.Box
                  backgroundColor="#FFFFFF"
                  width="100%"
                  maxWidth="146px"
                  py="9px"
                  boxShadow="0px 2px 42px rgba(0, 0, 0, 0.25)"
                  borderRadius="5px"
                  display="flex"
                  justifyContent="center"
                >
                  <Chakra.Text
                    color="#712B75"
                    fontWeight="500"
                    fontSize="18px"
                    lineHeight="21px"
                    margin="0px"
                  >
                    Withdraw
                  </Chakra.Text>
                </Chakra.Box>
              </Chakra.Box>
            </Chakra.Box>
          );
        })}
      </Chakra.Box>
    </Chakra.Box>
  );
}
