import { createContext } from "react";
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Home from '../../Pages/Home';
import App from '../../App';

const AppContext = createContext(null);
const changePage = jest.fn();

test('home page has TradeDesk', () => {
  render(
    <AppContext.Provider value={changePage}>
      <Home AppContext={AppContext} />
    </AppContext.Provider>
  );

  expect(screen.getByText(/TradeDesk/i)).toBeInTheDocument();
});

test('home page has Today in New York', () => {
  render(
    <AppContext.Provider value={changePage}>
      <Home AppContext={AppContext} />
    </AppContext.Provider>
  );

  expect(screen.getByText(/Today in New York/i)).toBeInTheDocument();
});

test('home page has Trending', () => {
  render(
    <AppContext.Provider value={changePage}>
      <Home AppContext={AppContext} />
    </AppContext.Provider>
  );

  const linkElement = screen.getByText(/Trending Stocks/i);
  expect(linkElement).toBeInTheDocument();
});

test('can navigate to AI Assistant from home page', async () => {
  render(
    <AppContext.Provider value={changePage}>
      <App />
    </AppContext.Provider>
  );

  const buttonElement = screen.getByText(/AI Assistant/i);
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement)

  await waitFor(() => {
    expect(screen.getByText(/Hey there! I am Nick's AI Assistant./i)).toBeInTheDocument();
  }, { timeout: 5000 });
});