// exercise1.js

function processData(str, callback) {
    // callback(str);
    console.log(callback(str));
}

function toUpperCase(text) {
    return text.toUpperCase();
}

processData("hello world", toUpperCase);


