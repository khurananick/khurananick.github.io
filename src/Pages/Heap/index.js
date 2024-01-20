import HeapClass from '../../Helpers/HeapClass';

import { useState, useRef } from 'react';
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';
import { useSideModalState } from '@twilio-paste/core/side-modal';
import { Alert } from '@twilio-paste/core/alert';
import { Anchor } from '@twilio-paste/core/anchor';

import { ErrorBoundary } from "react-error-boundary";

import heapToCytoScapeFormat from '../../Helpers/heapToCytoScapeFormat';

import ControlsComponent from './components/ControlsComponent';
import GraphComponent from '../../Components/GraphComponent';
import CodeModal from '../../Components/CodeModal';

const minHeap = new HeapClass([3,2,1], (a,b)=>a>b);
const maxHeap = new HeapClass([20,19,18], (a,b)=>a<b);

const Heap = (props) => {
  const ref = useRef(null);
  const [refresh, setRefresh] = useState(false);
  const dialog = useSideModalState({});

  return (
    <Flex ref={ref} wrap>
      <Box width="100%" padding="space50" backgroundColor="colorBackground">
        <ControlsComponent
          minHeap={minHeap}
          maxHeap={maxHeap}
          refresh={refresh}
          dialog={dialog}
          setRefresh={setRefresh} />
      </Box>
      <Box width="100%" padding="space50">
        <Alert variant="neutral">
          <strong>INFO:</strong> 
          <Box>This is an example of Heaps shown using React. Add a random element or remove top to see how the Heap changes.</Box>
          <Anchor href="https://github.com/khurananick/khurananick.github.io/blob/main/src/Pages/Heap/index.js" showExternal target="_blank" rel="noopener noreferrer">
            Here is the source code.
          </Anchor>
        </Alert>
      </Box>
      <Box width="100%" padding="space50"></Box>
      <ErrorBoundary fallback={<Text>Error loading GraphComponent</Text>}>
        <Box width="50%" onClick={()=>dialog.hide()}>
          <Text fontSize={"12pt"} fontWeight={"bold"} textAlign={"center"}>Min Heap Example</Text>
          <GraphComponent elements={heapToCytoScapeFormat(minHeap)} key={(new Date().getTime())} />
        </Box>
        <Box width="50%" onClick={()=>dialog.hide()}>
          <Text fontSize={"12pt"} fontWeight={"bold"} textAlign={"center"}>Max Heap Example</Text>
            <GraphComponent elements={heapToCytoScapeFormat(maxHeap)} key={(new Date().getTime()+100)} />
        </Box>
      </ErrorBoundary>
      <CodeModal dialog={dialog} code={heapCode} />
    </Flex>
  );
}

export default Heap;

const heapCode = `
class Heap {
  constructor(arr, operator) {
    this.arr = arr
    this.operator = operator;
    this.heap = [];
    for(const n of arr) this.insert(n)
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.size() - 1);
  }

  size() {
    return this.heap.length;
  }

  bubbleUp(index) {
    const elem = this.heap[index];
    const parentIndex = Math.floor((index + 1) / 2) - 1;
    const parent = this.heap[parentIndex];

    if(this.operator(parent, elem)) {
      this.heap[index] = parent;
      this.heap[parentIndex] = elem;
      this.bubbleUp(parentIndex);
    }
  }

  top() {
    return this.heap[0];
  }

  removeTop() {
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest = index;

    const length = this.size();

    if (left <= length && this.operator(this.heap[smallest], this.heap[left])) {
      smallest = left;
    }
    if (right <= length && this.operator(this.heap[smallest],this.heap[right])) {
      smallest = right;
    }
    if (smallest !== index) {
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      this.sinkDown(smallest);
    }
  }

  reset() {
    this.heap = [];
    for(const n of this.arr) this.insert(n)
  }
}
`