window.onload = function() {
    document.getElementById("showPuppy").onclick = onClickShowOrHidePuppy;
};

function onClickShowOrHidePuppy() {
    // is the checkbox checked? 
    let showPuppy = document.getElementById("showPuppy").checked;
    let imgPuppy = document.getElementById("puppy");

    // if so, show the puppy
    if (showPuppy) {
        imgPuppy.style.display = "block";
    // not checked, hide puppy
    } else {
        imgPuppy.style.display = "none";
    }
    
}