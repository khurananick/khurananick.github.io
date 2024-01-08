import { useState, useRef, useContext } from 'react';
import { useUID } from 'react-uid';
import {
  Sidebar,
  SidebarHeader, SidebarHeaderLabel,
  SidebarBody,
  SidebarFooter,
  SidebarNavigation, SidebarNavigationItem,
  SidebarNavigationDisclosure, SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationDisclosureHeading, SidebarNavigationDisclosureContent
} from '@twilio-paste/core/sidebar';

import { ProductHomeIcon } from '@twilio-paste/icons/esm/ProductHomeIcon';
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import { CodeIcon } from "@twilio-paste/icons/esm/CodeIcon";

import { Text } from '@twilio-paste/core/text';
import { MediaObject, MediaFigure } from '@twilio-paste/core/media-object';
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';

import Home from "../Pages/Home/index.js";
import ChatAssistant from "../Pages/ChatAssistant/index.js";
import LinkedList from "../Pages/LinkedList/index.js";
import Heap from "../Pages/Heap/index.js";
import Stack from "../Pages/Stack/index.js";
import Queue from "../Pages/Queue/index.js";

import BubbleSort from '../Pages/BubbleSort/index.js';
import HeapSort from '../Pages/HeapSort/index.js';

const SidebarComponent = (props) => {
  const { changePage } = useContext(props.AppContext);
  const sidebarRef = useRef(null);
  const sidebarNavigationSkipLinkID = useUID();
  const topbarSkipLinkID = useUID();
  const mainContentSkipLinkID = useUID();
  const [selected, setSelected] = useState('home');

  return (
    <Sidebar
      ref={sidebarRef}
      sidebarNavigationSkipLinkID={sidebarNavigationSkipLinkID}
      topbarSkipLinkID={topbarSkipLinkID}
      mainContentSkipLinkID={mainContentSkipLinkID}
      collapsed={false}
      variant="default"
    >
      <SidebarHeader>
        <Flex wrap>
          <Box padding="space80"></Box>
          <Flex width="100%" hAlignContent="center">
            <MediaObject as="div">
              <MediaFigure as="div" spacing="space40">
                <Box
                  as="img"
                  alt="profile picture"
                  src="/images/profile.png"
                  borderRadius="borderRadius30"
                  height="120px"
                  width="auto"
                  />
              </MediaFigure>
            </MediaObject>
          </Flex>
          <Box padding="space30"></Box>
          <Flex width="100%" hAlignContent="center">
              <SidebarHeaderLabel>Pulak (Nick) Khurana</SidebarHeaderLabel>
          </Flex>
          <Box padding="space10"></Box>
        </Flex>
      </SidebarHeader>
      <SidebarBody>
      <SidebarNavigation aria-label="Main navigation" hierarchical hideItemsOnCollapse>
        <SidebarNavigationItem 
          data-testid="home_button"
          icon={<ProductHomeIcon decorative />}
          selected={selected === 'home'}
          onClick={() => {
            setSelected('home')
            changePage(<Home AppContext={props.AppContext} />)
          }}
        >
          Home
        </SidebarNavigationItem>
        <SidebarNavigationItem 
          data-testid="chat_assistant_button"
          icon={<UserIcon decorative />}
          selected={selected === 'chat_assistant'}
          onClick={() => {
            setSelected('chat_assistant')
            changePage(<ChatAssistant />)
          }}
        >
          Chat Assistant
        </SidebarNavigationItem>
        <SidebarNavigationDisclosure state={{"visible":"true"}}>
          <SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureHeading icon={<CodeIcon decorative />}>
              Data Structures
            </SidebarNavigationDisclosureHeading>
          </SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureContent>
            <SidebarNavigationItem 
              data-testid="heap_button"
              selected={selected === 'heap'}
              onClick={() => {
                setSelected('heap')
                changePage(<Heap />)
              }}
            >
              Heap
            </SidebarNavigationItem>
          </SidebarNavigationDisclosureContent>
          <SidebarNavigationDisclosureContent>
            <SidebarNavigationItem 
              data-testid="linked_list_button"
              selected={selected === 'linked_list'}
              onClick={() => {
                setSelected('linked_list ')
                changePage(<LinkedList />)
              }}
            >
              Linked List
            </SidebarNavigationItem>
          </SidebarNavigationDisclosureContent>
          <SidebarNavigationDisclosureContent>
            <SidebarNavigationItem 
              data-testid="stack_button"
              selected={selected === 'stack'}
              onClick={() => {
                setSelected('stack')
                changePage(<Stack />)
              }}
            >
              Stack
            </SidebarNavigationItem>
          </SidebarNavigationDisclosureContent>
          <SidebarNavigationDisclosureContent>
            <SidebarNavigationItem 
              data-testid="queue_button"
              selected={selected === 'queue'}
              onClick={() => {
                setSelected('queue')
                changePage(<Queue />)
              }}
            >
              Queue
            </SidebarNavigationItem>
          </SidebarNavigationDisclosureContent>
        </SidebarNavigationDisclosure>
        <SidebarNavigationDisclosure state={{"visible":"true"}}>
          <SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureHeading icon={<CodeIcon decorative />}>
              Algorithms
            </SidebarNavigationDisclosureHeading>
          </SidebarNavigationDisclosureHeadingWrapper>
          <SidebarNavigationDisclosureContent>
            <SidebarNavigationItem 
              data-testid="bubble_sort_button"
              selected={selected === 'bubble_sort'}
              onClick={() => {
                setSelected('bubble_sort')
                changePage(<BubbleSort />)
              }}
            >
              Sort - Bubble
            </SidebarNavigationItem>
          </SidebarNavigationDisclosureContent>
          <SidebarNavigationDisclosureContent>
            <SidebarNavigationItem
              data-testid="heap_sort_button"
              selected={selected === 'heap_sort'}
              onClick={() => {
                setSelected('heap_sort')
                changePage(<HeapSort />)
              }}
            >
              Sort - Heap
            </SidebarNavigationItem>
          </SidebarNavigationDisclosureContent>
        </SidebarNavigationDisclosure>
      </SidebarNavigation>
      </SidebarBody>
      <SidebarFooter>
        <Text color="white">
          Contact:
        </Text>
        <Text fontWeight={'fontWeightBold'} color="white">
          khurananick@gmail.com
        </Text>
      </SidebarFooter>
      </Sidebar>
  )
}

export default SidebarComponent;