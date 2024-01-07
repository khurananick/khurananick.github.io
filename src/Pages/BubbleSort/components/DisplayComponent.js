import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

const DisplayComponent = ({ array }) => {

  return (
    <Flex grow hAlignContent={"center"}>
      {array.map((item, index) => {
        return (
          <Box key={index} border="solid 1px black" padding="space50" margin="space10">
            <Text textAlign={"center"}>{item}</Text>
          </Box>
        )
      })}
    </Flex>
  )
}

export default DisplayComponent;