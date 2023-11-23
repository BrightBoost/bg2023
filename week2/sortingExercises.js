let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];

function sortByTitle(a, b) {
    if(a.Title.toUpperCase() < b.Title.toUpperCase()) {
        return -1;
    } else if(a.Title.toUpperCase() == b.Title.toUpperCase()) {
        return 0;
    } else {
        return 1;
    }
}

courses.sort(sortByTitle);
console.log(courses);

function sortByPrice(a, b) {
    let price1 = Number(a.Fee);
    let price2 = Number(b.Fee);

    let diff = price1 - price2;
    if(diff == 0) {
        return sortByTitle(a, b);
    } else {
        return diff;
    }
}

courses.sort(sortByPrice);
console.log(courses);

function sortByDate(a, b) {
    let msTime1 = new Date(a.StartDate).getTime();
    let msTime2 = new Date(b.StartDate).getTime();

    return msTime1 - msTime2;
}

courses.sort(sortByDate);
console.log(courses);