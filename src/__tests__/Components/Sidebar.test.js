import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../../App';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

test('SideBar component has Home', async () => {
  render(<App />)

  await waitFor(() => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});

test('SideBar component has Chat Assistant', () => {
  render(<App />)

  const element = screen.getByText(/Chat Assistant/i);
  expect(element).toBeInTheDocument();
});

test('Sidebar component can navigate to Heap', async () => {
  render(<App />)

  const element = screen.getByTestId('heap_button');
  expect(element).toBeInTheDocument();

  fireEvent.click(element)

  await waitFor(() => {
    expect(screen.getByText(/Remove Top/i)).toBeInTheDocument();
  });
});

test('Sidebar component can navigate to Bubble Sort', async () => {
  render(<App />)

  const element = screen.getByTestId('bubble_sort_button');
  expect(element).toBeInTheDocument();

  fireEvent.click(element)

  await waitFor(() => {
    expect(screen.getByText(/Restart/i)).toBeInTheDocument();
  });
});

test('Sidebar component can navigate to Heap Sort', async () => {
  render(<App />)

  const element = screen.getByTestId('heap_sort_button');
  expect(element).toBeInTheDocument();

  fireEvent.click(element)

  await waitFor(() => {
    expect(screen.getByText(/Restart/i)).toBeInTheDocument();
  });
});