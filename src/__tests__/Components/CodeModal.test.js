import { render, screen, waitFor } from '@testing-library/react';
import CodeModal from '../../Components/CodeModal';

import { Flex } from '@twilio-paste/core/flex';
import { useSideModalState } from '@twilio-paste/core/side-modal';

test('code modal displays code', async () => {
  let dialog = null;

  const Body = () => {
    dialog = useSideModalState({});
    return (
      <Flex grow>
        <CodeModal dialog={dialog} code={code} />
      </Flex>
    )
  }

  render(<Body />);

  await waitFor(() => {
    dialog.show();
    const element = screen.getByTestId('dialog-content');
    expect(element).toBeInTheDocument();
  });
});

const code = `
import React from 'react';
import { Box } from "@twilio-paste/core/box";

const App = () => {
  return (
    <Box
      backgroundColor="colorBackground"
      padding="space60"
      borderRadius="borderRadius20"
      boxShadow="shadowCard"
    >
      Hello Paste!
    </Box>
  );
}

export default App;
`;