// exercise5.js

function fetchData(url, callback) {
    setTimeout(() => {
        callback(null, "data from " + url);
    }, 2000);
}

function processData(data, callback) {
    let processed = data.toUpperCase();
    callback(processed);
}

fetchData("https://api.example.com", function (err, response) {
    if (err) {
        console.log(err);
    } else {
        processData(response, function (result) {
            console.log("Processed Result:", result);
        });
    }
});
