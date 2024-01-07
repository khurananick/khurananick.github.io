import { useEffect, useState, useRef } from 'react';
import { Box } from '@twilio-paste/core/box';
import { Flex } from "@twilio-paste/core/flex";
import { Text } from '@twilio-paste/core/text';
import { MediaObject, MediaFigure, MediaBody } from '@twilio-paste/core/media-object';
import { Heading } from "@twilio-paste/core/heading";

const Weather = (props) => {
  const ref = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Weather::useEffect");

    async function fetchData() {
      const resp = await fetch(`https://www.benerdy.net/static/${props.city.key}.json`).catch((err) => null)
      if(!resp) return null
      try {
        const data = await resp.json()
        return data
      } catch(err) {
        return null
      }
    }

    async function loadData() {
      const data = await fetchData()
      setData(data);
    }

    loadData();
  }, [props.city.key]);

  let jsx = "Loading weather data..."

  if(data) {
      const src = data.weather ? "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" : ""
      jsx = <Box>
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space40">
              <img src={src} alt="weather icon" />
            </MediaFigure>
            <MediaBody>
              <Text as="h3" fontSize="fontSize20" lineHeight="lineHeight20" color="colorTextWeak">
              {data.main?.temp}°F | {data.weather && data.weather[0].description}
              </Text>
              <Text as="h3" fontSize="fontSize20" lineHeight="lineHeight20" color="colorTextWeak">
                H: {data.main?.temp_max}°F | L: {data.main?.temp_min}°F
              </Text>
              <Text as="h3" fontSize="fontSize20" lineHeight="lineHeight20" color="colorTextWeak">
                Feels Like: {data.main?.feels_like}°F
              </Text>
            </MediaBody>
          </MediaObject>
      </Box>
  }

  return (
    <Flex ref={ref} wrap hAlignContent="center">
      <Box width="100%">
        <Heading as="div" variant="heading40">
        <Text textAlign="center">Current Weather</Text>
          <Text fontSize="8pt" textAlign={"center"}>Updated Hourly</Text>
        </Heading> 
      </Box>
      <Flex wrap hAlignContent={"center"}>
        {jsx}
      </Flex>
    </Flex>
  )
}

export default Weather;