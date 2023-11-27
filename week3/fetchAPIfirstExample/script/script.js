window.onload = () => {
    document.getElementById("userId").onchange = populateParagraph;
}

function populateParagraph() {

    // call the api
    fetch("https://jsonplaceholder.typicode.com/users/" + document.getElementById("userId").value)
        // process the response
        .then(response => response.json())
        .then(user => {
            // set the innerHTML of the output paragraph
            let paragraphElement = document.getElementById("output");
            paragraphElement.innerHTML = user.name;
        });
}