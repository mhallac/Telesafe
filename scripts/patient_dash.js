function analyze() {
    console.log("analyzing");


    const data = { uname: document.getElementById("pname").value, msg: document.getElementById("RonSad").value };
    console.log(data);

    fetch('http://127.0.0.1:5000/analyze', {

        // Specify the method
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // A JSON payload
        body: JSON.stringify(data)
        }).then(function (response) { // At this point, Flask has printed our JSON
        return response.text();
        }).then(function (text) {

        console.log('POST response: ');

        // Should be 'OK' if everything was successful
        console.log(text);
    });         
}