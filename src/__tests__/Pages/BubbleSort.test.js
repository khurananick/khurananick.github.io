import { screen, render, waitFor } from '@testing-library/react';
import BubbleSort from '../../Pages/BubbleSort';

test('bubble sort page has controls', async () => {
  render(<BubbleSort />);

  expect(screen.getByText(/Restart/i)).toBeInTheDocument();
  expect(screen.getByText(/View Code/i)).toBeInTheDocument();
});

test('bubble sort page has display', async () => {
  render(<BubbleSort />);

  await waitFor(() => {
    expect(screen.getByText(/2/i)).toBeInTheDocument()
  });

  await waitFor(() => {
    expect(screen.getByText(/7/i)).toBeInTheDocument()
  });
});
