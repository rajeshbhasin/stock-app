import React from 'react';
import styles from '../styles/modules/stock.module.scss';
import newsStyles from '../styles/modules/news.module.scss';
import Graph from './Graph';

function SearchResult({ stockData }) {
  return (
    <div className={styles.flexBox}>
      <div className={styles.box}>
        <img
          src={stockData.imageURL}
          className={styles.logo}
          alt="LogoSticker"
        />
        <div className={styles.ZSM8k}>
          <table className={styles.text}>
            <tbody>
              <tr>
                <td className={styles.titleText}>Price</td>
                <td>{stockData.price}</td>
              </tr>
              <tr>
                <td className={styles.titleText}>Day High</td>
                <td>{stockData.regularDayHigh}</td>
              </tr>
              <tr>
                <td className={styles.titleText}>Day Low</td>
                <td>{stockData.regularDayLow}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.ZSM8k}>
          <table>
            <tbody>
              <tr>
                <td className={styles.titleText}> Day Range</td>
                <td>{stockData.regularMarketDayRange}</td>
              </tr>
              <tr>
                <td className={styles.titleText}>52 Week High</td>
                <td>{stockData.fiftyTwoWeekHigh}</td>
              </tr>
              <tr>
                <td className={styles.titleText}>52 Week Low</td>
                <td>{stockData.fiftyTwoWeekLow}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.ZSM8k}>
          <table>
            <tbody>
              <tr>
                <td className={styles.titleText}>PE Ratio</td>
                <td>{stockData.trailingPE}</td>
              </tr>
              <tr>
                <td className={styles.titleText}>Mkt Cap</td>
                <td>{stockData.marketCap}</td>
              </tr>
              <tr>
                <td className={styles.titleText}>Mkt Vol</td>
                <td>{stockData.regularMarketVolume}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={newsStyles.box}>
        <Graph stockData={stockData}></Graph>
        <div>
          <h1 className={newsStyles.newsTitle}>News Results</h1>
          <div className={newsStyles.container}>
            <div className={newsStyles.imgBox}>
              {stockData.news[0].thumbnail && stockData.news[0].thumbnail.resolutions?(
                <img
                  width="60px"
                  height="60px"
                  src={stockData.news[0].thumbnail.resolutions[0].url}
                  alt="Article"
                />
              ) : (
                <img
                width="60px"
                height="60px"
                src={"https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg"}
                alt="Article"
              />
              )}
            </div>
            <div className={newsStyles.text}>
              <a className={newsStyles.link} href={stockData.news[0].link}>
                {stockData.news[0].title}
              </a>
              <p className={newsStyles.textPublisher}>
                {' '}
                {stockData.news[0].publisher}
              </p>
            </div>
          </div>
          <div className={newsStyles.container}>
            <div className={newsStyles.imgBox}>
              {stockData.news[1].thumbnail && stockData.news[1].thumbnail.resolutions ? (
                <img
                  width="60px"
                  height="60px"
                  src={stockData.news[1].thumbnail.resolutions[0].url}
                  alt="Article"
                />
              ) : (
                <img
                width="60px"
                height="60px"
                src={"https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg"}
                alt="Article"
              />
              )}
            </div>
            <div className={newsStyles.text}>
              <a className={newsStyles.link} href={stockData.news[1].link}>
                {stockData.news[1].title}
              </a>
              <p className={newsStyles.textPublisher}>
                {' '}
                {stockData.news[1].publisher}
              </p>
            </div>
          </div>
          <div className={newsStyles.container}>
            <div className={newsStyles.imgBox}>
              {stockData.news[2].thumbnail && stockData.news[2].thumbnail.resolutions?
               (
                
                <img
                  width="60px"
                  height="60px"
                  src={stockData.news[2].thumbnail.resolutions[0].url}
                  alt="Article"
                />
              ) : (
                <img
                width="60px"
                height="60px"
                src={"https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg"}
                alt="Article"
              />
                )}
            </div>
            <div className={newsStyles.text}>
              <a className={newsStyles.link} href={stockData.news[2].link}>
                {stockData.news[2].title}
              </a>
              <p className={newsStyles.textPublisher}>
                {' '}
                {stockData.news[2].publisher}
              </p>
            </div>
          </div>

          <div className={newsStyles.container}>
            <div className={newsStyles.imgBox}>
              {stockData.news[3].thumbnail &&  stockData.news[3].thumbnail.resolutions? (
                <img
                  width="60px"
                  height="60px"
                  src={stockData.news[3].thumbnail.resolutions[0].url}
                  alt="Article"
                />
              ) : (
                <img
                width="60px"
                height="60px"
                src={"https://upload.wikimedia.org/wikipedia/commons/d/d7/Philippine-stock-market-board.jpg"}
                alt="Article"
              />
              )}
            </div>
            <div className={newsStyles.text}>
              <a className={newsStyles.link} href={stockData.news[3].link}>
                {stockData.news[3].title}
              </a>
              <p className={newsStyles.textPublisher}>
                {' '}
                {stockData.news[3].publisher}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
