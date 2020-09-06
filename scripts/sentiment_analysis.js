function analyze() {
    console.log(document.getElementById("inSent").value);    
}

function postData(input) {
    $.ajax({
        type: "POST",
        url: "/test_sentiment.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
}

postData('data to process');

// GET is the default method, so we don't need to set it
fetch('./test_sentiment.py')
    .then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log('GET response text:');
        console.log(text); // Print the greeting as text
    });

// Send the same request
fetch('./test_sentiment.py')
    .then(function (response) {
        return response.json(); // But parse it as JSON this time
    })
    .then(function (json) {
        console.log('GET response as JSON:');
        console.log(json); // Here’s our JSON object
    })