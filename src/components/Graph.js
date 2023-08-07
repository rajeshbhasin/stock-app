import Plot from 'react-plotly.js';

function Graph({ stockData }) {
  var Color = 'green';
  if (stockData.stockY.slice(-1) < stockData.stockY[0]) {
    Color = 'red';
  }
  return (
    <Plot
      data={[
        {
          x: stockData.stockX,
          y: stockData.stockY,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: Color },
        },
      ]}
      layout={{ width: 600, height: 380, title: 'Stock Price (15 Day)' }}
    />
  );
}

export default Graph;
