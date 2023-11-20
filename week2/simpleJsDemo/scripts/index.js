function showGreetingInConsole() {
    // get the h1 element by id
    let headerElement = document.getElementById("header");
    headerElement.innerHTML = "<strong style='color:blue'>blablabla</strong>";
    console.dir(headerElement);
}

function sayHi() {
    let inputBoxName = document.getElementById("name");
    let username = inputBoxName.value;
    alert("Hello " + username);
    inputBoxName.value = "blabla";
    let selectedColor = document.getElementById("backgroundColor").value;
    document.body.style.backgroundColor = selectedColor;
}

showGreetingInConsole();