import { render, screen, waitFor } from '@testing-library/react';
import HeapSort from '../../Pages/HeapSort';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

test('heap sort page has controls', async () => {
  render(<HeapSort />);

  expect(screen.getByText(/Restart/i)).toBeInTheDocument();
  expect(screen.getByText(/View Code/i)).toBeInTheDocument();
});

test('heap sort page has display', async () => {
  render(<HeapSort />);

  await waitFor(() => {
    expect(screen.getAllByTestId('display').length).toBeGreaterThan(0);
  }, { timeout: 10000 });
});