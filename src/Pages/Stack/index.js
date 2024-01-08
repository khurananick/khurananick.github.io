import { useEffect, useState } from "react";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { useSideModalState } from '@twilio-paste/core/side-modal';

import ControlsComponent from "./components/ControlsComponent";
import StackClass from "./helpers/StackClass";
import CodeModal from "../../Components/CodeModal";

const stack = new StackClass();

const Stack = () => {
  const dialog = useSideModalState({});
  const [array, setArray] = useState([...stack.stack].reverse())

  useEffect(() => {
    return () => { stack.reset() }
  }, [])

  return (
    <Flex wrap vAlignContent={"center"}>
      <Box width="100%" padding="space50" backgroundColor={"colorBackground"}>
        <ControlsComponent stack={stack} setArray={setArray} dialog={dialog} />
      </Box>
      <Flex grow padding="space50" hAlignContent={"center"}>
        <Box>
          {array.length && array.map((element, index) => {
            return (
              <Box key={index} border="solid 1px black" padding="space50" margin="space10">
                {element}
              </Box>
            )
          })}
        </Box>
      </Flex>
      <CodeModal dialog={dialog} code={stackCode} />
    </Flex>
  )
}

export default Stack;

const stackCode = `
class StackClass {
  constructor() {
    this.stack = []
    this.init()
  }

  init() {
    for(let i=1; i<4; i++) this.stack.push(i)
  }

  push(element) {
    this.stack.push(element)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.stack.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0
  }

  reset() {
    this.stack = []
    this.init()
  }
}
`