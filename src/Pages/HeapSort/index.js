import { useState, useEffect, useRef } from 'react';
import { Flex } from '@twilio-paste/core/flex';
import { Box } from '@twilio-paste/core/box';
import { Text } from '@twilio-paste/core/text';

import { ErrorBoundary } from 'react-error-boundary';

import ControlsComponent from './components/ControlsComponent';
import GraphComponent from '../../Components/GraphComponent';

import Heapify from './helpers/Heapify';
const heapify = new Heapify();

const HeapSort = () => {
  const startArray = [1,2,3,4,5,6,7,8,9,10];
  const dialog = useRef(null);
  const [state, setState] = useState({ array: [], heap: [] });

  function callback(array, heap) {
    setState({ array, heap })
  }

  function finalCallback(array) {
    setState({ array, heap: [] })
  }

  useEffect(() => {
    heapify.init()
    heapify.start(startArray, callback, finalCallback);
    return () => { heapify.cancel() }
  }, []);

  function doReset() {
    setState({ array: [], heap: [] })
    heapify.cancel();
    heapify.init()
    heapify.start(startArray, callback, finalCallback);
  }

  return (
    <Flex grow wrap hAlignContent={"center"}>
      <Box width="100%" padding="space50" backgroundColor={"colorBackground"}>
        <ControlsComponent doReset={doReset} dialog={dialog} />
      </Box>
      <Box width="100%" padding="space50">
        <Flex wrap hAlignContent={"center"}>
          {state.array.map((item, index) => {
            return <Box key={index} border="solid 1px black" padding="space50" margin="space10" data-testid="display">
              <Text textAlign={"center"}>{item}</Text>
            </Box>
          })}
        </Flex>
      </Box>
      <ErrorBoundary fallback={<Text>Error loading GraphComponent</Text>}>
        <Box width="50%" onClick={()=>dialog.hide()}>
          <GraphComponent elements={state.heap} key={(new Date().getTime()+100)} />
        </Box>
      </ErrorBoundary>
    </Flex>
  );
}

export default HeapSort;