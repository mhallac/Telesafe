var data = fetch('http://127.0.0.1:5000/analyze')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log('GET response text:');
        return json; 
    });

console.log(data);

data.then(function(result) {
    document.getElementById("ron").style.background = result["rweasley"][2];
    document.getElementById("harry").style.background = result["hpotter"][2];
    document.getElementById("herm").style.background = result["hgranger"][2];
    document.getElementById("albus").style.background = result["adumbledore"][2];
    document.getElementById("tom").style.background = result["tvoldemort"][2];

    document.getElementById("rondepression").innerHTML = result["rweasley"][0];
    document.getElementById("harrydepression").innerHTML = result["hpotter"][0];
    document.getElementById("hermdepression").innerHTML = result["hgranger"][0];
    document.getElementById("albdepression").innerHTML = result["adumbledore"][0];
    document.getElementById("tomdepression").innerHTML = result["tvoldemort"][0];
});


function refresh() {
    var data = fetch('http://127.0.0.1:5000/analyze')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log('GET response text:');
        return json; 
    });

console.log(data);

data.then(function(result) {
    document.getElementById("ron").style.background = result["rweasley"][2];
    document.getElementById("harry").style.background = result["hpotter"][2];
    document.getElementById("herm").style.background = result["hgranger"][2];
    document.getElementById("albus").style.background = result["adumbledore"][2];
    document.getElementById("tom").style.background = result["tvoldemort"][2];

    document.getElementById("rondepression").innerHTML = result["rweasley"][0];
    document.getElementById("harrydepression").innerHTML = result["hpotter"][0];
    document.getElementById("hermdepression").innerHTML = result["hgranger"][0];
    document.getElementById("albdepression").innerHTML = result["adumbledore"][0];
    document.getElementById("tomdepression").innerHTML = result["tvoldemort"][0];
});

}