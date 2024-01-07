import { useReducer, useState, useRef, useEffect } from "react";
import useWebSocket from 'react-use-websocket';
import { ChatLog, ChatMessage, ChatBubble, ChatMessageMeta, ChatMessageMetaItem } from "@twilio-paste/core/chat-log";
import { ChatComposer } from "@twilio-paste/core/chat-composer";
import { $getRoot, ClearEditorPlugin } from "@twilio-paste/lexical-library";
import { Flex } from "@twilio-paste/core/flex";
import { Box } from '@twilio-paste/core/box';
import { Avatar } from "@twilio-paste/core";

import EnterKeySubmitPlugin from './plugins/EnterKeySubmitPlugin.js';
import SendButtonPlugin from './plugins/SendButtonPlugin.js';
import AutoFocusPlugin from './plugins/AutoFocusPlugin.js';
import SpeechButtonPlugin from "./plugins/SpeechButtonPlugin.js";

import Moment from "react-moment";
import 'moment-timezone';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

if(!cookies.get('session'))
  cookies.set('session', new Date().getTime(), { path: '/' });

const ChatAssistant = (props) => {
  const [mounted, setMounted] = useState(false);
  const [serverMessagesLoaded, setServerMessagesLoaded] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useReducer((messages, newMessage) => [...messages, newMessage], [
    <ChatMessage variant={"inbound"} key={"0"}>
      <ChatBubble>
      Hey there! I am Nick's AI Assistant. I'm here to answer any questions you may have about Nick's professional experience. What would you like to know?
      </ChatBubble>
      <ChatMessageMeta aria-label="0-meta" >
        <ChatMessageMetaItem></ChatMessageMetaItem>
      </ChatMessageMeta>
    </ChatMessage>
  ]);
  const scrollerRef = useRef(null);
  const loggerRef = useRef(null);

  async function loadMessages() {
    console.log("ChatAssistant:loadMessages")
    const url = `https://benerdy.net:9001/characters/6595724eeb7d859a0dd1cfbd/messages`
    const response = await fetch(url, {
      headers: { "session": cookies.get("session") }
    });
    const json = await response.json();

    if(json.messages?.length && !serverMessagesLoaded) {
      setServerMessagesLoaded(true);
      while(messages.length) messages.pop()
      json.messages.forEach((message, index) => {
        setMessages(createChatBubble(index, message.from, message.body, message.time));
      });
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !loggerRef.current) return;
    if(scrollerRef.current && !scrollerRef.current.scrollTo) return;
    scrollerRef.current?.scrollTo({top: loggerRef.current.scrollHeight, behavior: 'smooth'});
  }, [messages, mounted]);

  function createChatBubble(index, from, body, timestamp) {
    let variant = "inbound"
    const metaItems = [
      <Avatar key="avatar" size="sizeIcon30" name={from === "User" ? "User" : "Artificial Intelligence"} />,
      (timestamp ? <Moment key="moment" format="MM/DD/YYYY h:mm A">{timestamp}</Moment> : null)
    ]

    if(from === "User") {
      metaItems.reverse()
      variant = "outbound"
    }

    return (
        <ChatMessage variant={variant} key={index}>
          <ChatBubble>
            {body}
          </ChatBubble>
          <ChatMessageMeta>
            <ChatMessageMetaItem>
              {metaItems}
            </ChatMessageMetaItem>
          </ChatMessageMeta>
        </ChatMessage>
    )
  }

  const conn = useWebSocket("wss://benerdy.net:9001", {
    onOpen: () => {
      console.log('WebSocket connection established.');
      loadMessages();
    },
    onClose: () => {
      console.log('WebSocket connection closed.');
    },
    shouldReconnect: (closeEvent) => true
  });

  const socket = conn.getWebSocket();
  if(socket)
    socket.onmessage = (event) => {
      const messageJson = JSON.parse(event.data);
      setMessages(createChatBubble(messages.length, "AI", messageJson.message, new Date()));
    }

  function submitMessage() {
    const msg = input;

    if(!msg) return;

    if(conn.readyState === 1) {
      setInput("");
      setMessages(createChatBubble(messages.length, "User", msg, new Date()));
      conn.sendJsonMessage({ character_id: "6595724eeb7d859a0dd1cfbd", message: msg, session: cookies.get('session') });
    }
  }

  const handleComposerChange = (editorState) => {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      setInput(text);
    });
  };

  return (
    <Flex wrap>
      <Box width="100%" ref={scrollerRef} height={window.innerHeight - 50}  maxHeight={window.innerHeight - 50} overflowX="hidden" overflowY="auto">
        <ChatLog ref={loggerRef}>{messages}</ChatLog>
      </Box>
      <Box width="100%">
        <ChatComposer
          config={{namespace: 'customer-chat', onError: (e) => { throw e } }}
          placeholder="Chat text"
          ariaLabel="A basic chat composer"
          style={{ height: "50px" }}
          onChange={handleComposerChange}>
          <ClearEditorPlugin />
          <SpeechButtonPlugin />
          <SendButtonPlugin onClick={submitMessage} />
          <EnterKeySubmitPlugin onKeyDown={submitMessage} />
          <AutoFocusPlugin />
        </ChatComposer>
      </Box>
    </Flex>
  )
}

export default ChatAssistant;