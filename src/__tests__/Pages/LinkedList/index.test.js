import { render, screen } from '@testing-library/react';
import LinkedList from '../../../Pages/LinkedList/index.js'

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

test('LinkedList page has "Add Node" and "Reset List"', () => {
  render(<LinkedList />);

  expect(screen.getByText(/Add Node/i)).toBeInTheDocument();
  expect(screen.getByText(/Reset List/i)).toBeInTheDocument();
});

test('LinkedList page has "Error loading GraphComponent"', () => {
  render(<LinkedList />);

  const element = screen.getByText(/Error loading GraphComponent/i);
  expect(element ).toBeInTheDocument();
});