import { useEffect, useCallback } from "react";
import {
  useLexicalComposerContext,
  CLEAR_EDITOR_COMMAND,
  COMMAND_PRIORITY_HIGH,
  KEY_ENTER_COMMAND,
} from '@twilio-paste/lexical-library';

const EnterKeySubmitPlugin = ({ onKeyDown }) => {
  const [editor] = useLexicalComposerContext();

  const handleEnterKey = useCallback(
    (event) => {
      const { shiftKey, ctrlKey } = event;
      if (shiftKey || ctrlKey) return false;
      event.preventDefault();
      event.stopPropagation();
      onKeyDown();
      editor.dispatchCommand(CLEAR_EDITOR_COMMAND, undefined);
      return true;
    },
    [editor, onKeyDown]
  );

  useEffect(() => {
    return editor.registerCommand(KEY_ENTER_COMMAND, handleEnterKey, COMMAND_PRIORITY_HIGH);
  }, [editor, handleEnterKey]);

  return null;
};

export default EnterKeySubmitPlugin;