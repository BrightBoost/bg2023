class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}

function changeDog(dog) {
    dog.name = "Rex";
}

let d1 = new Dog("bobby", "labradoodle");
console.log(`Before: ${d1.name}`); // Before: bobby
changeDog(d1);
console.log(`After: ${d1.name}`);  // After: Rex

function changeStr(name) {
    name = "blabla";
}

let str = "Iman";
console.log(`Before: ${str}`); // Before: Iman
changeStr(str);
console.log(`After: ${str}`);   // After: Iman