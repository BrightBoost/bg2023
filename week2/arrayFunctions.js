const spongebobCharacters = [
    { name: "SpongeBob SquarePants", job: "Fry Cook at the Krusty Krab" },
    { name: "Patrick Star", job: "Unemployed" },
    { name: "Squidward Tentacles", job: "Cashier at the Krusty Krab" },
    { name: "Mr. Krabs", job: "Owner of the Krusty Krab" },
    { name: "Sandy Cheeks", job: "Scientist and Inventor" },
    { name: "Plankton", job: "Owner of the Chum Bucket" },
    { name: "Mrs. Puff", job: "Boating School Teacher" },
    { name: "Larry the Lobster", job: "Lifeguard at Goo Lagoon" },
    { name: "Mermaid Man", job: "Retired Superhero" },
    { name: "Barnacle Boy", job: "Retired Superhero Sidekick" },
    { name: "Pearl Krabs", job: "High School Student" },
    { name: "Karen", job: "Chum Bucket Computer/Wife of Plankton" }
];

function displayElement(element) {
    console.log(element);
}

function countChars(element) {
    return element.name.length;
}

function longerThan10(element) {
    return element.name.length > 10;
}

spongebobCharacters
    .filter(longerThan10)
    .map(countChars)
    .forEach(displayElement);

spongebobCharacters
    .filter(e => e.name.length > 10)
    .map(e => e.name.length)
    .forEach(e => console.log(e));