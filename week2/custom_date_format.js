function getFormattedDate(dateString) {
    // arrays with names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


    // create a date object with the string
    let date = new Date(dateString);

    // get the separate components of the format
    let dayNumber = date.getDate();
    let dayName = days[date.getDay()];
    let monthName = months[date.getMonth()];
    let year = date.getFullYear();
    
    // concat it to one string and return
    return `${dayNumber}-${monthName}-${year} (${dayName})`;

}

console.log(getFormattedDate("2022-07-27"));