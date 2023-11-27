window.onload = () => {
    populateTable();

}

function populateTable() {
    // get the table
    const usersTable = document.getElementById("users");
    // call the api
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            // for every value in the response, add it to the table
            for (let user of users) {
                let row = usersTable.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerHTML = user.name;
                // create a button to show the details
                let btn = document.createElement("button");
                btn.onclick = () => onDetailBtnClicked(user.id);
                btn.innerHTML = "details";
                // when clicked on that button, display the details of the item
                cell2.appendChild(btn);
            }
        });



}

function onDetailBtnClicked(id) {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
    .then(response => response.json())
    .then(user => {
       const detailPara = document.getElementById("userDetails");
       detailPara.innerHTML = `email: ${user.email}, username: ${user.username}`;
    });
}