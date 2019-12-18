import debounce from '../node_modules/debounce/index.js';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

const input = document.querySelector('.js-input');
const countryList = document.querySelector('.js-country-list');
const countryData = document.querySelector('.js-country-data');

input.addEventListener(
  'input',
  debounce(e => fetchCountries(e), 500),
);

const fetchCountries = e => {
  const { value } = e.target;
  if (!value) return;
  fetch(`https://restcountries.eu/rest/v2/name/${value}`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .then(data => createMarkup(data));
};

const createMarkup = array => {
  countryList.innerHTML = '';
  countryData.innerHTML = '';

  if (array.length === 1) {
    const uniqueCountry = array[0];
    const { name, capital, population, languages, flag } = uniqueCountry;

    const langArray = languages.map(
      lang => `<li class = 'country-language'>${lang.name}</li>`,
    );

    const langListMarkup = langArray.join('');

    console.log(langListMarkup);

    countryData.innerHTML = `
            <h3 class = "country-name">Country: ${name}</h3>
            <p class = "contry-capital">Capital: ${capital}</p>
            <p class = "contry-population">Population: ${population}</p>
            <ul class = "contry-languages-list">Languages: ${langListMarkup}</ul>
            <object id="svg-object" data="${flag}" type="image/svg+xml"></object>
            `;
  } else if (array.length > 1 && array.length <= 10) {
    const countriesList = array.map(country => country.name);

    const countriesListMarkup = countriesList
      .map(countryName => `<li class = "country-list-item">${countryName}</li>`)
      .join('');

    countryList.innerHTML = countriesListMarkup;
  } else
    PNotify.error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
};
