async function getPrice(symbol) {
  const url = `https://yahoo-finance127.p.rapidapi.com/price/${symbol}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a1a39a97fcmsh851dbdc51bcdc22p177d98jsn66210fe10554',
      'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    var result = await response.text();
    result = JSON.parse(result);
    return result;
  } catch (error) {
    return 'error';
  }
}

export default getPrice;
