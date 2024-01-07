import { createElement, useState } from "react";
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { useLexicalComposerContext, $getSelection } from '@twilio-paste/lexical-library';
import { MicrophoneOnIcon } from "@twilio-paste/icons/esm/MicrophoneOnIcon";
import { RecordIcon } from "@twilio-paste/icons/esm/RecordIcon";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const SpeechButtonPlugin = () => {
  const [buttonIcon, setButtonIcon] = useState(MicrophoneOnIcon);
  const [editor] = useLexicalComposerContext();

  const handleClick = () => {
    setButtonIcon(RecordIcon);
    const recognition = new SpeechRecognition();
    recognition.start();
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const command = event.results[last][0].transcript;
      editor.update(() => {
        const selection = $getSelection();
        if(selection) selection.insertText(command);
      });
    };
    recognition.onspeechend = () => {
      setButtonIcon(MicrophoneOnIcon);
      recognition.stop();
    };
    recognition.onerror = (event) => {
      setButtonIcon(MicrophoneOnIcon);
    };
  };

  return (
    createElement(Box, { position: "absolute", top: "space30", right: "space120" },
      createElement(Button, { variant: "primary_icon", size: "reset", onClick: handleClick },
        createElement(buttonIcon, { decorative: false, title: "Send message", size: "sizeIcon40" })
      )
    )
  );
};

export default SpeechButtonPlugin;