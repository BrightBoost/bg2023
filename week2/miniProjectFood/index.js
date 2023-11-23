let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

window.onload = function () {
    // populate the categories dropdown
    populateCategories();
    // add event for the onchange of the categories dropdown
    document.getElementById("categories").onchange = populateMenuBox;
}

function populateCategories(){
    let categories = document.getElementById("categories");
    for(let category in menu) {
        let option = new Option(category, category);
        categories.appendChild(option);
    }
}
    

function populateMenuBox() {
    let menuItems = document.getElementById("menuItems");
    menuItems.options.length = 0;
    let categorySelected = document.getElementById("categories").value;
    for(let menuCategory in menu) {
        if(menuCategory == categorySelected) {
            for(let menuItem of menu[menuCategory]) {
                let option = new Option(menuItem, menuItem);
                menuItems.appendChild(option);
            }
        }
        
    }
}