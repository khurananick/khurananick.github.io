import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { ButtonGroup } from '@twilio-paste/core/button-group';

const ControlsComponent = (props) => {
  return (
      <Flex hAlignContent={"center"}>
        <ButtonGroup attached>
          <Button variant="secondary" onClick={() =>{
            const random = Math.floor(Math.random() * 20);
            props.minHeap.insert(random);
            props.maxHeap.insert(random);
            props.setRefresh(!props.refresh);
          }}>Add Random
          </Button>
          <Button variant="destructive_secondary" onClick={() =>{
            props.minHeap.removeTop();
            props.maxHeap.removeTop();
            props.setRefresh(!props.refresh);
          }}> Remove Top
        </Button>
          <Button variant="secondary" onClick={() =>{
            props.minHeap.reset()
            props.maxHeap.reset();
            props.setRefresh(!props.refresh);
          }}> Reset
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