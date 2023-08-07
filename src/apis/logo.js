async function getLogo(ticker) {
  const url = `https://api.api-ninjas.com/v1/logo?ticker=${ticker}`;
  const options = {
    method: 'GET',
    headers: { 'X-Api-Key': 'fhQ2bauK8fzIVjbF57jjpw==lbssMhgEFnsIiaH3' },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    let js = JSON.parse(result);
    return js[0]['image'];
  } catch (error) {
    console.error(error);
  }
}

export default getLogo;
