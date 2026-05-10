const result = document.getElementById("result");
const loader = document.getElementById("loader");

async function loadCountries() {

    loader.classList.remove("d-none");
    result.innerHTML = "";

    try {

        const response = await fetch(
        "https://api.allorigins.win/raw?url=https://www.apicountries.com/subregion/Western%20Asia"
        );

        const data = await response.json();

        data.forEach(country => {
            result.innerHTML += `
            <div class="col-md-4">
                <div class="card p-3 mb-3">
                    <img src="${country.flags.png}" class="img-fluid">
                    <h4>${country.name}</h4>
                    <p>Capital: ${country.capital}</p>
                    <p>Population: ${country.population}</p>
                </div>
            </div>
            `;
        });

    } catch(error) {
        result.innerHTML = `<h3>${error.message}</h3>`;
    }

    loader.classList.add("d-none");
}