import { useRef } from 'react';
import { Flex } from "@twilio-paste/core/flex";
import { Heading } from '@twilio-paste/core/heading';

import Moment from 'react-moment';
import 'moment-timezone';

const DateTime = (props) => {
  const ref = useRef(null);

  return (
    <Flex ref={ref} hAlignContent="center">
      <Heading as="h4" variant="heading40">
        <Moment format="MM/DD/YYYY hh:mm:ss" tz={props.city.timezone} interval={1000}></Moment>
      </Heading>
    </Flex>
  )
}

export default DateTime;