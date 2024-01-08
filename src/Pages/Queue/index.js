import { useEffect, useState } from "react";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { useSideModalState } from '@twilio-paste/core/side-modal';

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
    <Flex wrap vAlignContent={"center"}>
      <Box width="100%" padding="space50" backgroundColor={"colorBackground"}>
        <ControlsComponent queue={queue} setArray={setArray} dialog={dialog} />
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