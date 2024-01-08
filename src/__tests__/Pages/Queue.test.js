import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Queue from '../../Pages/Queue';

test('queue page has "Dequeue" and "Reset Queue"', () => {
  render(<Queue />);

  expect(screen.getByText(/Dequeue/i)).toBeInTheDocument();
  expect(screen.getByText(/Reset Queue/i)).toBeInTheDocument();
});

test('queue page "Dequeue" button dequeues from queue', async () => {
  render(<Queue />);

  const elem = screen.getByText(/Dequeue/i)

  fireEvent.click(elem)

  await waitFor(() => {
    expect(screen.queryByText(/1/i)).not.toBeInTheDocument();
  });
});

test('queue page "Enqueue" button adds to queue', async () => {
  render(<Queue />);

  const elem = screen.getByText(/Enqueue/i)

  fireEvent.click(elem)

  await waitFor(() => {
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});