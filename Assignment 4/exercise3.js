// exercise3.js

function fetchData(url, callback) {
    setTimeout(() => {
        callback("Response from " + url);
    }, 2000);
}

fetchData("https://api.example.com", function (response) {
    console.log(response);
});