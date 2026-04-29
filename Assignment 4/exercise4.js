// exercise4.js

function fetchData(url, callback) {
    setTimeout(() => {
        let error = false; // true karo to error aayega

        if (error) {
            callback("Error: Something went wrong", null);
        } else {
            callback(null, "Response from " + url);
        }
    }, 2000);
}

fetchData("https://api.example.com", function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});