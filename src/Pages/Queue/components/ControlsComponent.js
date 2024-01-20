import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { ButtonGroup } from '@twilio-paste/core/button-group';

const ControlsComponent = (props) => {
  return (
      <Flex hAlignContent={"center"}>
        <ButtonGroup attached>
          <Button variant="secondary" data-testid="Enqueue" onClick={() =>{
            const last = props.queue.last();
            props.queue.enqueue(last + 1)
            props.setArray([...props.queue.queue])
          }}>Enqueue
          </Button>
          <Button variant="destructive_secondary" data-testid="Dequeue" onClick={() =>{
            props.queue.dequeue()
            props.setArray([...props.queue.queue])
          }}>Dequeue
        </Button>
          <Button variant="secondary" data-testid="ResetQueue" onClick={() =>{
            props.queue.reset()
            props.setArray([...props.queue.queue])
          }}> Reset Queue
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