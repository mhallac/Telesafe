function analyze(uname) {
    console.log("analyzing");
    console.log(document.getElementById("RonSad").value);
    fetch('http://127.0.0.1:5000/analyze', {

        // Specify the method
        method: 'POST',

        // A JSON payload
        body: JSON.stringify({
        "uname": "Weasley, Ron",
        "text" : document.getElementById("RonSad").value
        })
        }).then(function (response) { // At this point, Flask has printed our JSON
        return response.text();
        }).then(function (text) {

        console.log('POST response: ');

        // Should be 'OK' if everything was successful
        console.log(text);
    });         
}