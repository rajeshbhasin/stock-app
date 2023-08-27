import React, { useState } from 'react';
import Spinner from './Spinner';
import toast from 'react-hot-toast';
import getHistoricalData from '../apis/historicalData';
import getPrice from '../apis/price';
import getLogo from '../apis/logo';
import getNewsResults from '../apis/newsResults';
import styles from '../styles/modules/search.module.scss';
import buttonStyles from '../styles/modules/button.module.scss';
import SearchResult from './SearchResult';
import { getClasses } from '../utils/getClasses';

function SearchHeader() {
  const [symbol, setSymbol] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (symbol === '') {
      toast.error('Please enter a Symbol');
      return;
    }

    //If we already have shown results - clean that up.
    if (showResult) {
      setShowResult(false);
    }

    var result = [];
    var imageURL = '';
    var newsResults = [];
    var historicalValues = [];
    const month_names_short = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    try {
      setLoading(true);
      result = await getPrice(symbol.toUpperCase());
      //If first API itself fails no use moving forward
      if (result === 'error') {
        toast.error('Please enter a correct Symbol');
        setLoading(false);
        return;
      }

      imageURL = await getLogo(result['symbol']);

      //Using this as this is the longest time taking API;
      historicalValues = await getHistoricalData(result['symbol']).then(
        setLoading(false)
      );
      var timestamps = historicalValues['timestamp'];
      const prices = historicalValues['indicators']['quote'][0]['close'];
      console.log(timestamps)
      //Convert timestamps to date - and then the timezone to New York
      timestamps = timestamps.map((stamp) => {
        var d = new Date(stamp * 1000 + (3600000*-9.5));
        return d.getDate() + ' ' + month_names_short[d.getMonth()];
      });
      var stockChartXValues = timestamps;
      var stockChartYValues = prices;

      newsResults = await getNewsResults(result['symbol']);
    } catch (error) {
      console.error(error);
    }

    setStockData({
      symbol: result['symbol'],
      price: result['regularMarketPrice']['raw'],
      regularMarketDayRange: result['regularMarketDayRange']['raw'],
      regularMarketChange: result['regularMarketChange']['raw'],
      fiftyTwoWeekHigh: result['fiftyTwoWeekHigh']['raw'],
      fiftyTwoWeekLow: result['fiftyTwoWeekLow']['raw'],
      trailingPE: result['trailingPE']['raw'],
      regularDayHigh: result['regularMarketDayHigh']['raw'],
      regularDayLow: result['regularMarketDayLow']['raw'],
      marketCap: result['marketCap']['fmt'],
      regularMarketVolume: result['regularMarketVolume']['fmt'],
      imageURL: imageURL,
      stockX: stockChartXValues,
      stockY: stockChartYValues,
      news: newsResults,
    });
    setShowResult(true);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setShowResult(false);
  };

  return (
    <div className={styles.content__wrapper}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h2 className={styles.todoText}>Enter Symbol </h2>
          <input className={styles.todoInput}
            type="text"
            placeholder="Stock symbol here"
            id="symbol"
            value={symbol}
            onChange={(e) => {
              setSymbol(e.target.value);
            }}
          />
          <button
            className={getClasses([
              buttonStyles.button,
              buttonStyles.buttonPrimary,
            ])}
            type="submit"
          >
            Submit
          </button>
          <button
            className={buttonStyles.button}
            onClick={(e) => handleClear(e)}
          >
            Clear
          </button>
      </form>
      {showResult && <SearchResult stockData={stockData} />}
      {showResult && (
        <a className={styles.titleText} href="https://clearbit.com">
          Logos provided by Clearbit
        </a>
      )}
      {loading && <Spinner />}
    </div>
  );
}

export default SearchHeader;
