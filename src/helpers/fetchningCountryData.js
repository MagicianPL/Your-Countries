export let capital = "";
export let continent = "";
export let flag = "";
export let population = "";

export const fetchCountryData = (
  country,
  setCurrency,
  setCapital,
  setContinent,
  setFlag,
  setPopulation
) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const curr = Object.keys(data[0].currencies)[0];
      setCurrency(curr);
      setCapital(data[0].capital[0]);
      setContinent(data[0].continents[0]);
      setFlag(data[0].flags.png);
      setPopulation(data[0].population);
    })
    .catch(() => setCurrency("?"));
};
