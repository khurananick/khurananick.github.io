import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Stack from '../../Pages/Stack';

test('stack page has "Remove" and "Reset Stack"', () => {
  render(<Stack />);

  expect(screen.getByText(/Remove/i)).toBeInTheDocument();
  expect(screen.getByText(/Reset Stack/i)).toBeInTheDocument();
});

test('stack page "Remove" button removes from stack', async () => {
  render(<Stack />);

  const elem = screen.getByText(/Remove/i)

  fireEvent.click(elem)

  await waitFor(() => {
    expect(screen.queryByText(/3/i)).not.toBeInTheDocument();
  });
});

test('stack page "Add" button adds to stack', async () => {
  render(<Stack />);

  const elem = screen.getByText(/Add/i)

  fireEvent.click(elem)

  await waitFor(() => {
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});