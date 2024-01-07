import { render, screen, waitFor } from '@testing-library/react';
import Stocks from '../../Components/Stocks';

test('Stocks component has "Trending Stocks"', async () => {
  render(<Stocks />);
  expect(screen.getByText(/Trending Stocks/i)).toBeInTheDocument();
});

test('Stocks component has tickers', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(stockMock)
  });

  render(<Stocks />);

  await waitFor(() => {
    expect(screen.getByText(/SPY/i)).toBeInTheDocument();
  });
});

const stockMock = {
  "metadata": "Top gainers, losers, and most actively traded US tickers",
  "last_updated": "2024-01-04 16:16:00 US/Eastern",
  "top_gainers": [
      {
          "ticker": "HHGCW",
          "price": "0.0299",
          "change_amount": "0.0248",
          "change_percentage": "486.2745%",
          "volume": "500"
      },
      {
          "ticker": "SWAGW",
          "price": "0.23",
          "change_amount": "0.19",
          "change_percentage": "475.0%",
          "volume": "64758"
      },
      {
          "ticker": "MCACW",
          "price": "0.0195",
          "change_amount": "0.0124",
          "change_percentage": "174.6479%",
          "volume": "43206"
      },
      {
          "ticker": "DRMAW",
          "price": "0.021",
          "change_amount": "0.0127",
          "change_percentage": "153.012%",
          "volume": "4035"
      },
      {
          "ticker": "EUDAW",
          "price": "0.1399",
          "change_amount": "0.0799",
          "change_percentage": "133.1667%",
          "volume": "2533"
      },
      {
          "ticker": "MOBXW",
          "price": "0.15",
          "change_amount": "0.0798",
          "change_percentage": "113.6752%",
          "volume": "234716"
      },
      {
          "ticker": "MINM",
          "price": "3.62",
          "change_amount": "1.91",
          "change_percentage": "111.6959%",
          "volume": "48512513"
      },
      {
          "ticker": "ZFOXW",
          "price": "0.0202",
          "change_amount": "0.0102",
          "change_percentage": "102.0%",
          "volume": "251605"
      },
      {
          "ticker": "LIBYW",
          "price": "0.01",
          "change_amount": "0.005",
          "change_percentage": "100.0%",
          "volume": "10000"
      },
      {
          "ticker": "SEPAW",
          "price": "0.15",
          "change_amount": "0.075",
          "change_percentage": "100.0%",
          "volume": "49500"
      },
      {
          "ticker": "ROCLW",
          "price": "0.08",
          "change_amount": "0.0399",
          "change_percentage": "99.5012%",
          "volume": "102213"
      },
      {
          "ticker": "OMGA",
          "price": "5.315",
          "change_amount": "2.585",
          "change_percentage": "94.6886%",
          "volume": "88325749"
      },
      {
          "ticker": "ATXI",
          "price": "0.3423",
          "change_amount": "0.1663",
          "change_percentage": "94.4886%",
          "volume": "180195295"
      },
      {
          "ticker": "RVSNW",
          "price": "0.0349",
          "change_amount": "0.0166",
          "change_percentage": "90.7104%",
          "volume": "505"
      },
      {
          "ticker": "TETEW",
          "price": "0.0191",
          "change_amount": "0.009",
          "change_percentage": "89.1089%",
          "volume": "2250"
      },
      {
          "ticker": "MSSAR",
          "price": "0.17",
          "change_amount": "0.08",
          "change_percentage": "88.8889%",
          "volume": "10"
      },
      {
          "ticker": "MACAW",
          "price": "0.0399",
          "change_amount": "0.0172",
          "change_percentage": "75.7709%",
          "volume": "82"
      },
      {
          "ticker": "BNIXW",
          "price": "0.0172",
          "change_amount": "0.0072",
          "change_percentage": "72.0%",
          "volume": "5576"
      },
      {
          "ticker": "NNAGR",
          "price": "0.17",
          "change_amount": "0.0699",
          "change_percentage": "69.8302%",
          "volume": "17069"
      },
      {
          "ticker": "HUBCW",
          "price": "0.0251",
          "change_amount": "0.0097",
          "change_percentage": "62.987%",
          "volume": "122682"
      }
  ],
  "top_losers": [
      {
          "ticker": "IMACW",
          "price": "0.0022",
          "change_amount": "-0.0059",
          "change_percentage": "-72.8395%",
          "volume": "33902"
      },
      {
          "ticker": "EDBLW",
          "price": "0.0079",
          "change_amount": "-0.0135",
          "change_percentage": "-63.0841%",
          "volume": "31880"
      },
      {
          "ticker": "RCRTW",
          "price": "0.0052",
          "change_amount": "-0.0048",
          "change_percentage": "-48.0%",
          "volume": "19469"
      },
      {
          "ticker": "EJH",
          "price": "0.7777",
          "change_amount": "-0.7023",
          "change_percentage": "-47.4527%",
          "volume": "10449604"
      },
      {
          "ticker": "GMBLZ",
          "price": "0.0027",
          "change_amount": "-0.0023",
          "change_percentage": "-46.0%",
          "volume": "104571"
      },
      {
          "ticker": "CYTHW",
          "price": "0.1888",
          "change_amount": "-0.1412",
          "change_percentage": "-42.7879%",
          "volume": "10"
      },
      {
          "ticker": "BTCTW",
          "price": "0.0253",
          "change_amount": "-0.0177",
          "change_percentage": "-41.1628%",
          "volume": "2800"
      },
      {
          "ticker": "ONMDW",
          "price": "0.0054",
          "change_amount": "-0.0036",
          "change_percentage": "-40.0%",
          "volume": "61258"
      },
      {
          "ticker": "BREZW",
          "price": "0.1053",
          "change_amount": "-0.0697",
          "change_percentage": "-39.8286%",
          "volume": "12611"
      },
      {
          "ticker": "OPK",
          "price": "0.9067",
          "change_amount": "-0.5933",
          "change_percentage": "-39.5533%",
          "volume": "89247117"
      },
      {
          "ticker": "SONDW",
          "price": "0.0122",
          "change_amount": "-0.0078",
          "change_percentage": "-39.0%",
          "volume": "10625"
      },
      {
          "ticker": "ANGHW",
          "price": "0.0501",
          "change_amount": "-0.0299",
          "change_percentage": "-37.375%",
          "volume": "7169"
      },
      {
          "ticker": "ZJYL",
          "price": "126.89",
          "change_amount": "-74.11",
          "change_percentage": "-36.8706%",
          "volume": "61067"
      },
      {
          "ticker": "PNST",
          "price": "5.26",
          "change_amount": "-2.94",
          "change_percentage": "-35.8537%",
          "volume": "348622"
      },
      {
          "ticker": "SLS",
          "price": "0.5816",
          "change_amount": "-0.3239",
          "change_percentage": "-35.7703%",
          "volume": "5019189"
      },
      {
          "ticker": "BARK+",
          "price": "0.04",
          "change_amount": "-0.022",
          "change_percentage": "-35.4839%",
          "volume": "15059"
      },
      {
          "ticker": "POL",
          "price": "5.82",
          "change_amount": "-3.18",
          "change_percentage": "-35.3333%",
          "volume": "668460"
      },
      {
          "ticker": "WEL+",
          "price": "0.0231",
          "change_amount": "-0.0119",
          "change_percentage": "-34.0%",
          "volume": "41556"
      },
      {
          "ticker": "WINVW",
          "price": "0.01",
          "change_amount": "-0.005",
          "change_percentage": "-33.3333%",
          "volume": "203426"
      },
      {
          "ticker": "FMSTW",
          "price": "0.24",
          "change_amount": "-0.119",
          "change_percentage": "-33.1476%",
          "volume": "3804"
      }
  ],
  "most_actively_traded": [
      {
          "ticker": "BETS",
          "price": "0.0088",
          "change_amount": "-0.0017",
          "change_percentage": "-16.1905%",
          "volume": "643685921"
      },
      {
          "ticker": "ATXI",
          "price": "0.3423",
          "change_amount": "0.1663",
          "change_percentage": "94.4886%",
          "volume": "180195295"
      },
      {
          "ticker": "NKLA",
          "price": "0.7955",
          "change_amount": "0.0553",
          "change_percentage": "7.471%",
          "volume": "149257465"
      },
      {
          "ticker": "ALTM",
          "price": "6.79",
          "change_amount": "0.0",
          "change_percentage": "0.0%",
          "volume": "126644083"
      },
      {
          "ticker": "SQQQ",
          "price": "14.84",
          "change_amount": "0.25",
          "change_percentage": "1.7135%",
          "volume": "111447564"
      },
      {
          "ticker": "QS",
          "price": "9.3",
          "change_amount": "2.8",
          "change_percentage": "43.0769%",
          "volume": "108468988"
      },
      {
          "ticker": "SOXS",
          "price": "7.0397",
          "change_amount": "0.1897",
          "change_percentage": "2.7693%",
          "volume": "107450442"
      },
      {
          "ticker": "TSLA",
          "price": "237.93",
          "change_amount": "-0.52",
          "change_percentage": "-0.2181%",
          "volume": "102154136"
      },
      {
          "ticker": "MARA",
          "price": "26.27",
          "change_amount": "2.835",
          "change_percentage": "12.0973%",
          "volume": "96589646"
      },
      {
          "ticker": "OPK",
          "price": "0.9067",
          "change_amount": "-0.5933",
          "change_percentage": "-39.5533%",
          "volume": "89247117"
      },
      {
          "ticker": "OMGA",
          "price": "5.315",
          "change_amount": "2.585",
          "change_percentage": "94.6886%",
          "volume": "88325749"
      },
      {
          "ticker": "SPY",
          "price": "467.34",
          "change_amount": "-1.45",
          "change_percentage": "-0.3093%",
          "volume": "83296918"
      },
      {
          "ticker": "SOXL",
          "price": "25.515",
          "change_amount": "-0.735",
          "change_percentage": "-2.8%",
          "volume": "74462122"
      },
      {
          "ticker": "TQQQ",
          "price": "45.81",
          "change_amount": "-0.78",
          "change_percentage": "-1.6742%",
          "volume": "70870611"
      },
      {
          "ticker": "AAPL",
          "price": "181.91",
          "change_amount": "-2.34",
          "change_percentage": "-1.27%",
          "volume": "70638732"
      },
      {
          "ticker": "WBA",
          "price": "24.26",
          "change_amount": "-1.31",
          "change_percentage": "-5.1232%",
          "volume": "60362510"
      },
      {
          "ticker": "AMD",
          "price": "136.01",
          "change_amount": "0.69",
          "change_percentage": "0.5099%",
          "volume": "57541394"
      },
      {
          "ticker": "AMZN",
          "price": "144.57",
          "change_amount": "-3.9",
          "change_percentage": "-2.6268%",
          "volume": "55788991"
      },
      {
          "ticker": "F",
          "price": "11.695",
          "change_amount": "-0.015",
          "change_percentage": "-0.1281%",
          "volume": "54254507"
      },
      {
          "ticker": "TLT",
          "price": "97.22",
          "change_amount": "-1.5",
          "change_percentage": "-1.5194%",
          "volume": "52419073"
      }
  ]
}