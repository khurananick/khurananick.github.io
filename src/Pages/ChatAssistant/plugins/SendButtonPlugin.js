import { createElement } from "react";
import { Box } from '@twilio-paste/core/box';
import { Button } from '@twilio-paste/core/button';
import { SendIcon } from '@twilio-paste/icons/esm/SendIcon';
import { useLexicalComposerContext, CLEAR_EDITOR_COMMAND } from '@twilio-paste/lexical-library';

const SendButtonPlugin = ({ onClick }) => {
  const [editor] = useLexicalComposerContext();

  const handleSend = () => {
    onClick();
    editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
  };

  return (
    createElement(Box, { position: "absolute", top: "space30", right: "space50" },
      createElement(Button, { "data-testid": "submit", variant: "primary_icon", size: "reset", onClick: handleSend },
        createElement(SendIcon, { decorative: false, title: "Send message", size: "sizeIcon40" })
      )
    )
  );
};

export default SendButtonPlugin;