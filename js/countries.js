const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json
            ())
        .then(data => displayCountries(data))
}
const displayCountries = (data) => {
    // console.log(data)
    const countriesContainer = document.getElementById('countries-container');
    // for (country of data) {
    //     console.log(country);
    //     const countryDiv = document.createElement('div');
    //     countryDiv.innerHTML = `
    //         <h3>Capital Name: </h3>
    //     `;
    //     countriesContainer.appendChild(countryDiv);
    // }

    // same kaj forEach diyeo kora jay
    data.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h4>Country Name: ${country.name.common}</h4>
        <p>Capital Name: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    });
}
// number pathale kono somossa hoyba kintu string pathale '' er moddhe rakhte hoy
const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country shortcut:', code)
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    // console.log(country)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2>Detail: ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `

}

loadCountries()