import { useEffect, useState } from "react";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { useSideModalState } from '@twilio-paste/core/side-modal';
import { Alert } from '@twilio-paste/core/alert';
import { Anchor } from '@twilio-paste/core/anchor';

import ControlsComponent from "./components/ControlsComponent";
import QueueClass from "./helpers/QueueClass";
import CodeModal from "../../Components/CodeModal";

const queue = new QueueClass();

const Queue = () => {
  const dialog = useSideModalState({});
  const [array, setArray] = useState([...queue.queue])

  useEffect(() => {
    return () => { queue.reset() }
  }, [])

  return (
    <Flex wrap vAlignContent={"center"} data-testid="Queue">
      <Box width="100%" padding="space50" backgroundColor={"colorBackground"}>
        <ControlsComponent queue={queue} setArray={setArray} dialog={dialog} />
      </Box>
      <Box width="100%" padding="space50">
        <Alert variant="neutral">
          <strong>INFO:</strong> 
          <Box>This is an example of Queue shown using React. Add to the queue or dequeue to see how the queue changes.</Box>
          <Anchor href="https://github.com/khurananick/khurananick.github.io/blob/main/src/Pages/Queue/index.js" showExternal target="_blank" rel="noopener noreferrer">
            Here is the source code.
          </Anchor>
        </Alert>
      </Box>
      <Flex grow padding="space50" hAlignContent={"center"}>
        {array.length && array.map((element, index) => {
          return (
            <Box key={index} border="solid 1px black" padding="space50" margin="space10">
              {element}
            </Box>
          )
        })}
      </Flex>
      <CodeModal dialog={dialog} code={queueCode} />
    </Flex>
  )
}

export default Queue;

const queueCode = `
class QueueClass{
  constructor() {
    this.queue = []
    this.init()
  }

  init() {
    for(let i=1; i<4; i++) this.enqueue(i)
  }

  enqueue(element) {
    this.queue.push(element)
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.queue.shift()
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.queue[0]
  }

  last() {
    if (this.isEmpty()) {
      return null
    }
    return this.queue[this.queue.length - 1]
  }

  isEmpty() {
    return this.queue.length === 0
  }

  reset() {
    this.queue = []
    this.init()
  }
}
`