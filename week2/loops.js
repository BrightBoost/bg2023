// while loops
let x = 0;

while (x < 10) {
    console.log(x);
    x++;
}

// do while loops
let y = 0;
do {
    console.log(y);
    y++;
} while (x < 10);

// (regular) for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// break and continue
// break is to stop the loop, continue is to move on to the next iteration

// perfect use case of when NOT to use continue
for (let i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
}

// look for nr 13 and then break out of the loop
for (let i = 0; i < 20; i++) {
    if (i == 13) {
        console.log("found 13!")
        break;
    }
    console.log(i);
}

// way to avoid break
let found13 = false;
let counter = 0;
while (!found13) {
    if (counter == 13) {
        found13 = true;
    }
    console.log(counter);
    counter++;
}


let animals = ["dog", "squirrel", "cat"];
let animalsLength = animals.length;
for (let i = 0; i < animalsLength; i++) {
    console.log(animals[i]);
}

// for of loops - for of is to loop over the elements in a array (and similar structures)
for (let animal of animals) {
    console.log(animal);
}

let cat = { name: "felix", age: 10 };
// for in loop - for in is to loop over the keys of an object
for (let key in cat) {
    console.log(cat[key]);
}