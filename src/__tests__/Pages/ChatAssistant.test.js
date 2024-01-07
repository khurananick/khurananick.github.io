import { render, screen, waitFor } from '@testing-library/react';
import ChatAssistant from '../../Pages/ChatAssistant';

window.scrollTo = jest.fn();

test('chat assistant page has proper greeting and submit button', async () => {
  render(<ChatAssistant />);

  await waitFor(() => {
    expect(screen.getByText(/Hey there! I am Nick's AI Assistant./i)).toBeInTheDocument();
  });

  expect(screen.getByTestId(/submit/i)).toBeInTheDocument();
});

test('chat assistant page connects to socket', async () => {
  const logSpy = jest.spyOn(console, 'log');

  render(<ChatAssistant />);

  await waitFor(() => {
    expect(logSpy).toHaveBeenCalledWith('WebSocket connection established.');
  })
});