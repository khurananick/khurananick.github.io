import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { ButtonGroup } from '@twilio-paste/core/button-group';
import { Button } from '@twilio-paste/core/button';

const ControlsComponent = (props) => {
  return (
      <Flex hAlignContent={"center"}>
        <ButtonGroup attached>
          <Button variant="secondary" onClick={() =>{
            const last = props.list.tail.value;
            props.list.push(last + 1);
            props.toggleReload()
          }}>Add Node
          </Button>
          <Button variant="secondary" onClick={() =>{
            props.list.reset()
            props.toggleReload()
          }}> Reset List
          </Button>
        </ButtonGroup>
        <Box width="10px"></Box>
        <ButtonGroup>
          <Button variant="secondary" onClick={() =>{
            props.dialog.show()
          }}> View Code
          </Button>
        </ButtonGroup>
      </Flex>
  )
}

export default ControlsComponent;