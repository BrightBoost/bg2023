window.onload = function() {
    // demo of the queryselector
    // by tag
    let h1 = document.querySelector("h1");
    let paragraph1 = document.querySelector("p");

    console.log(h1);
    console.log(paragraph1);

    // by id
    let paragraph2 = document.querySelector("#secondParagraph");
    console.log(paragraph2);

    // by class
    let listItem = document.querySelector(".item");
    console.log(listItem);


}