import { useEffect } from 'react';
import { useLexicalComposerContext } from '@twilio-paste/lexical-library';

const AutoFocusPlugin = function() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
}

export default AutoFocusPlugin;