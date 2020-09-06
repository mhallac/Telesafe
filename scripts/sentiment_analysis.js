function analyze() {
    fetch('http://127.0.0.1:5000/analyze', {

        // Specify the method
        method: 'POST',

        // A JSON payload
        body: JSON.stringify({
        "greeting": "Hello from the browser!"
        })
        }).then(function (response) { // At this point, Flask has printed our JSON
        return response.text();
        }).then(function (text) {

        console.log('POST response: ');

        // Should be 'OK' if everything was successful
        console.log(text);
    });         
}