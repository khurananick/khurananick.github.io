import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Queue from '../../Pages/Queue';

test('queue page has "Dequeue" and "Reset Queue"', () => {
  render(<Queue />);

  expect(screen.getByTestId("Dequeue")).toBeInTheDocument();
  expect(screen.getByTestId("ResetQueue")).toBeInTheDocument();
});

test('queue page "Dequeue" button dequeues from queue', async () => {
  render(<Queue />);

  const elem = screen.getByTestId("Dequeue")

  fireEvent.click(elem)

  await waitFor(() => {
    expect(screen.queryByText(/1/i)).not.toBeInTheDocument();
  });
});

test('queue page "Enqueue" button adds to queue', async () => {
  render(<Queue />);

  const elem = screen.getByTestId("Enqueue")

  fireEvent.click(elem)

  await waitFor(() => {
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});