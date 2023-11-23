window.onload = function() {
    populatePuppyDropdown();

    document.getElementById("puppyDropdown").onchange = onChangePuppy;
    // assign an onchange event to the puppy select
};

function populatePuppyDropdown() {
    let puppies = [
        {name: "presentPuppies", text: "Puppies in a box", imgSrc: "images/presentPuppies.png"},
        {name: "redLabrador", text: "Otis", imgSrc: "images/redLabrador.png"},
        {name: "cookie", text: "Cookie", imgSrc: "images/cookie.png"}
    ];

    let selectPuppies = document.getElementById("puppyDropdown");
    let puppiesLength = puppies.length;
    for (let i = 0; i < puppiesLength; i++) {
        let puppyOption = new Option(puppies[i].text, puppies[i].name);
        selectPuppies.appendChild(puppyOption);
    }
}

function onChangePuppy() {
    let selectPuppies = document.getElementById("puppyDropdown");
    let imgPuppy = document.getElementById("puppyImg");
    imgPuppy.src = `images/${selectPuppies.value}.png`;
}

