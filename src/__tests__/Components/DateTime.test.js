import { render, screen } from '@testing-library/react';
import moment from 'moment-timezone';
import DateTime from '../../Components/DateTime';


function getFormattedTime(timezone) {
  return moment.tz(new Date(), timezone).format("MM/DD/YYYY hh:mm")
}

test('datetime component time for New York', () => {
  const timezone = "America/New_York";

  render(<DateTime city={{name:"New York", timezone:timezone}} />);

  const text = getFormattedTime(timezone);
  const element = screen.getByText(new RegExp(text, "i"));
  expect(element).toBeInTheDocument();
});

test('datetime component has time for San Francisco', () => {
  const timezone = "America/Los_Angeles";

  render(<DateTime city={{name:"San Francisco", timezone:timezone}} />);

  const text = getFormattedTime(timezone);
  const element = screen.getByText(new RegExp(text, "i"));
  expect(element).toBeInTheDocument();
});