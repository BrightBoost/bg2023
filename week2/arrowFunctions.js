function displayElement(element) {
    console.log(element);
}

// one parameter, no () needed around it
let arrowDisplayElement = element => console.log(element);
arrowDisplayElement("hello");

function sayHi() {
    console.log("hi!");
}

let arrowSayHi = () => console.log("hi");

function addTwoNumbers(a, b) {
    return a + b;
}

// no need for return keyword when there's only one line in the body
let arrowAddTwoNumbers = (a, b) => a + b;

let nr = arrowAddTwoNumbers(2323, 2);
console.log(nr);

// multi line body
function sortByLengthThenName(a, b) {
    let nameA = a.name.toLowerCase(); // ignore upper and lowercase
    let nameB = b.name.toLowerCase(); // ignore upper and lowercase
    if (a.length !== b.length) {
        return a.length - b.length;
    } else {
        return nameA.localeCompare(nameB);
    }
}

let arrowSortByLengthThenName = (a, b) => {
    let nameA = a.name.toLowerCase(); // ignore upper and lowercase
    let nameB = b.name.toLowerCase(); // ignore upper and lowercase
    if (a.length !== b.length) {
        return a.length - b.length;
    } else {
        return nameA.localeCompare(nameB);
    }
};

function calcResult(a, b) {
    return a - b;
}
