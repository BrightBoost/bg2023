let someLanguages = ["Python", "JavaScript", "C#"];
someLanguages.push("Go");
// someLanguages[-1] = "Please dont do this";

// when you do "in" on the array, it gives you the indexes
for(let i in someLanguages) {
    console.log(someLanguages[i]);
}

console.log(someLanguages);

let indexOfGo = someLanguages.indexOf("Go");
console.log(someLanguages[indexOfGo]);

someLanguages.sort(sortOnLength);
console.log(someLanguages);

function sortOnLength(a, b) {
    return a.length - b.length;
}