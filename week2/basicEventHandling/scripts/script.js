"use strict";

window.onload = init;

function init() {
    // get the buttons
    const hiBtn = document.getElementById("sayHi");
    const byeBtn = document.getElementById("sayBye");

    // little experiment
    document.getElementById("readonlyTextBox").value = "blablabla";

    // set the click events
    hiBtn.onclick = hello;
    byeBtn.onclick = goodbye;
}

function hello() {
    alert("Hello!");
}

function goodbye() {
    alert("Bye!");
}