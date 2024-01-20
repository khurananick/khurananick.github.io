import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { ButtonGroup } from '@twilio-paste/core/button-group';

const ControlsComponent = (props) => {
  return (
      <Flex hAlignContent={"center"}>
        <ButtonGroup attached>
          <Button variant="secondary" data-testid="Add" onClick={() =>{
            const last = props.stack.peek();
            props.stack.push(last + 1)
            props.setArray([...props.stack.stack].reverse())
          }}>Add
          </Button>
          <Button variant="destructive_secondary" data-testid="Remove" onClick={() =>{
            props.stack.pop()
            props.setArray([...props.stack.stack].reverse())
          }}> Remove
        </Button>
          <Button variant="secondary" data-testid="ResetStack" onClick={() =>{
            props.stack.reset()
            props.setArray([...props.stack.stack].reverse())
          }}>Reset Stack
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