import { render, screen } from '@testing-library/react';
import Heap from '../../Pages/Heap';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

test('heap page has "Remove Top" and "Reset"', () => {
  render(<Heap />);

  expect(screen.getByText(/Remove Top/i)).toBeInTheDocument();
  expect(screen.getByText(/Reset/i)).toBeInTheDocument();
});

test('heap page has "Error loading GraphComponent"', () => {
  render(<Heap />);

  const element = screen.getByText(/Error loading GraphComponent/i);
  expect(element ).toBeInTheDocument();
});