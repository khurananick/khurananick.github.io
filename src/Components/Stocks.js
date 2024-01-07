import { useEffect, useState, useRef } from 'react';
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { Heading } from "@twilio-paste/core/heading";
import { ArrowUpIcon } from "@twilio-paste/icons/esm/ArrowUpIcon";
import { ArrowDownIcon } from "@twilio-paste/icons/esm/ArrowDownIcon";

const Stocks = (props) => {
  const ref = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Stocks::useEffect");

    async function fetchData() {
      const resp = await fetch("https://www.benerdy.net/static/stocks.json")
        .catch((err) => err)
      if(!resp) return null
      return await resp.json()
    }

    async function loadData() {
      const data = await fetchData()
      setData(data);
    }

    loadData();
  }, []);

  let jsx = null

  if(data) {
    jsx = data.most_actively_traded?.filter((item)=>item.price>5).map((stock, index) => {
      const change = parseFloat(stock.change_amount)
      const icon = change > 0 ? <ArrowUpIcon decorative={false} title="Up" color="green" /> :
        <ArrowDownIcon decorative={false} title="Down" color="red" />

      return <Flex key={index} width="75%">
        <Box textAlign="center" width="45%">
          <Text as="span" fontFamily="fontFamilyCode">
            {stock.ticker}
          </Text>
        </Box>
        <Box textAlign="right" width="45%">${stock.price}</Box>
        <Box width="10%" alignItems="center">{icon}</Box>
      </Flex>
    })
  }

  return (
    <Flex ref={ref} wrap>
      <Box width="100%">
        <Heading as="div" variant="heading40">
          <Text textAlign="center">Trending Stocks</Text>
          <Text fontSize="8pt" textAlign={"center"}>Updated Nightly</Text>
        </Heading> 
      </Box>
      <Flex wrap hAlignContent={"center"}>
        {jsx}
      </Flex>
    </Flex>
  )
}

export default Stocks;