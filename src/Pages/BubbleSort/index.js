import { useEffect, useState } from "react";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { useSideModalState } from '@twilio-paste/core/side-modal';

import ControlsComponent from "./components/ControlsComponent";
import DisplayComponent from "./components/DisplayComponent";
import startBubbleSort from "./helpers/startBubbleSortFunction";
import CodeModal from "../../Components/CodeModal";

const BubbleSort = () => {
  const startArray = [1,2,3,4,5,6,7,8,9,10];
  const [array, setArray] = useState([]);
  const dialog = useSideModalState({});

  useEffect(() => {
    startBubbleSort(startArray, setArray);
  }, []);

  function doReset() {
    setArray([])
    startBubbleSort(startArray, setArray);
  }

  return (
    <Flex wrap vAlignContent={"center"}>
      <Box width="100%" padding="space50" backgroundColor={"colorBackground"}>
        <ControlsComponent doReset={doReset} dialog={dialog} />
      </Box>
      <Box width="100%" padding="space50">
      <DisplayComponent array={array} />
      </Box>
      <CodeModal dialog={dialog} code={bubbleSortCode} />
    </Flex>
  )
}

export default BubbleSort;

const bubbleSortCode = `
function doBubbleSort(array) {
  let changed = false;

  for(let i=0; i<array.length; i++) {
    if(array[i] > array[i+1]) {
      [array[i], array[i+1]] = [array[i+1], array[i]];
      changed = true;
    }
  }

  if(!changed) return array;
    
  doBinarySort(array);
}
`