import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { ButtonGroup } from '@twilio-paste/core/button-group';

const ControlsComponent = (props) => {
  return (
      <Flex hAlignContent={"center"}>
        <ButtonGroup>
          <Button variant="secondary" onClick={() =>{
            props.doReset();
          }}> Restart
          </Button>
        </ButtonGroup>
        <Box width="10px"></Box>
        <ButtonGroup>
          <Button variant="secondary" onClick={() =>{
            props.dialog.show();
          }}> View Code
          </Button>
        </ButtonGroup>
      </Flex>
  )
}

export default ControlsComponent;