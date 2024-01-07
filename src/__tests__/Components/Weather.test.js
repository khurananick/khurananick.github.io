import { render, screen, waitFor } from '@testing-library/react';
import Weather from '../../Components/Weather';

test('Weather component has Loading weather data...', () => {
  render(
    <Weather city={
      { index: 0, key: "new_york", name: "New York", timezone: "America/New_York" }
    }/>
  )

  expect(screen.getByText(/Loading weather data/i)).toBeInTheDocument();
});

test('Weather component has local weather', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(weatherMock)
  });

  render(
    <Weather city={
      { index: 0, key: "new_york", name: "New York", timezone: "America/New_York" }
    }/>
  )

  await waitFor(() => {
    expect(screen.getByText(/broken clouds/i)).toBeInTheDocument();
  });

  const text = new RegExp(weatherMock.main.temp, "i");
  await waitFor(() => {
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});


const weatherMock = {
  "coord":{"lon":-74.006,"lat":40.7143},
  "weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],
  "base":"stations",
  "main":{"temp":42.75,"feels_like":36.48,"temp_min":39.15,"temp_max":45.28,"pressure":1016,"humidity":56},
  "visibility":10000,
  "wind":{"speed":11.5,"deg":280},
  "clouds":{"all":75},"dt":1704307852,
  "sys":{"type":2,"id":2008101,"country":"US","sunrise":1704284408,"sunset":1704318008},
  "timezone":-18000,
  "id":5128581,
  "name":"New York",
  "cod":200
};