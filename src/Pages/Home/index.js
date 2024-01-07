import { useRef, useEffect, useState, useContext } from 'react';
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { Heading } from '@twilio-paste/core/heading';
import { Button } from '@twilio-paste/core/button';
import { Separator } from '@twilio-paste/core/separator';
import DateTime from '../../Components/DateTime.js'
import Stocks from '../../Components/Stocks.js';
import Weather from '../../Components/Weather.js';
import { UnorderedList, ListItem } from '@twilio-paste/core/list';

import ChatAssistant from '../ChatAssistant/index.js';

const cities = [
  { index: 0, key: "new_york", name: "New York", timezone: "America/New_York" },
  { index: 1, key: "san_francisco", name: "San Francisco", timezone: "America/Los_Angeles" },
  { index: 2, key: "miami", name: "Miami", timezone: "America/New_York" }
];

const Home = (props) => {
  const { changePage } = useContext(props.AppContext);
  const home = useRef(null);
  const [city, setCity] = useState(cities[0]);

  useEffect(() => {
    console.log("Home::useEffect");

    let index = 0

    const intervalId = setInterval(() => {
      console.log("Home::useEffect::setInterval")
      index = (index + 1) % cities.length
      setCity(cities[index]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box ref={home} height={window.innerHeight} overflow="auto">
      <Flex>
        <Box padding="space80" width="60%">
          <Text>
            Hey there! I'm Nick Khurana - A 
            Web/Mobile Developer, Sales Engineer, and AI enthusiast. From coding cool projects to leading enterprise wins at large SaaS companies, I bring tech to life. Check out some of my work here and let's chat tech! 👋
          </Text>
          <Box paddingTop="space50">
            Have more questions? Ask my <Button
              size="small"
              onClick={()=>{
                changePage(<ChatAssistant AppContext={props.AppContext} />);
              }}
            >
              AI Assistant
            </Button>
          </Box>
          <Box paddingTop="space50">
            <Text>Want to see the React code? Check out the code here:</Text>
            <a target='_blank' rel="noreferrer" href="https://github.com/khurananick/khurananick.github.io">https://github.com/khurananick/khurananick.github.io</a>
          </Box>
          <Separator orientation="horizontal" verticalSpacing="space80" horizontalSpacing="200px" />
          <UnorderedList>
          <ListItem>
            <Text fontWeight="fontWeightBold">Character Chat AI</Text>
            <a target='_blank' rel="noreferrer" href="http://chatbot.benerdy.net">chatbot.benerdy.net</a>
            <Text>An app that lets you talk to a Generative AI in different personalities. Talk to Ben Franklin, or a Giraffe!</Text>
          </ListItem>
          <ListItem>
            <Text fontWeight="fontWeightBold">Beatmaker</Text>
            <a target='_blank' rel="noreferrer" href='http://beatmaker.benerdy.net'>beatmaker.benerdy.net</a>
            <Text>An app that gives you a randomly generated beat, and lets you play with it to create your own sound.</Text>
          </ListItem>
          <ListItem>
            <Text fontWeight="fontWeightBold">TradeDesk</Text>
            <a target='_blank' rel="noreferrer" href='http://ticker.benerdy.net'>ticker.benerdy.net</a>
            <Text>A an app that lets you backtest your stock trading ideas using javascript. Can you beat the market?</Text>
          </ListItem>
          <ListItem>
            <Text fontWeight="fontWeightBold">AI Minions</Text>
            <a target='_blank' rel="noreferrer" href='http://minions.benerdy.net'>minions.benerdy.net</a>
            <Text>A no-code platform that allows you to upload your own data and train your own AI models using Tensorflow.</Text>
          </ListItem>
          <ListItem>
            <Text fontWeight="fontWeightBold">ZoomLean</Text>
            <a target='_blank' rel="noreferrer" href='http://zoomlean.benerdy.net'>zoomlean.benerdy.net</a>
            <Text>A single pixel to place on your website that tracks and analyzes your visitors, allows you to A/B test, and much more.</Text>
          </ListItem>
          </UnorderedList>
        </Box>
        <Box padding="space80" width="40%" borderLeft='1px solid #ddd'>
          <Flex hAlignContent="center">
            <Heading as="h2" variant="heading20">Today in {city.name}</Heading>
          </Flex>
          <DateTime city={city} />
          <Separator orientation="horizontal" verticalSpacing="space40" horizontalSpacing="125px" />
          <Weather city={city} />
          <Separator orientation="horizontal" verticalSpacing="space40" horizontalSpacing="125px" />
          <Stocks />
        </Box>
      </Flex>
    </Box>
  )
}

export default Home;