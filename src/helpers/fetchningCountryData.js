export const fetchCountryData = (country, setCurrency) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const curr = Object.keys(data[0].currencies)[0];
      setCurrency(curr);
    })
    .catch(() => setCurrency("?"));
};
