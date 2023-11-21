function processForm() {
    // get the value in the name input box
    let nameInput = document.getElementById("name");
    let name = nameInput.value;

    // get the age value
    let age = document.getElementById("age").value;

    // get the paragraph and alter the message of the paragraph
    document.getElementById("message").innerHTML = "Hello " + name + " of " + age + " years old.";

    // get the colors
    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;

    console.log(nameInput);
    console.dir(nameInput);

    // change the styling
    document.body.style.backgroundColor = color1;
    document.body.style.color = color2;

}