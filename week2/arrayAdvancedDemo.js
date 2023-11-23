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

// see if we have a course with angular in the name
for(let course of courses) {
    if(course.Title.toLowerCase().includes("angular")) {
        console.log("found it!");
    }
}

function findCourseByName(course) {
    if(course.Title.toLowerCase().includes("angular")) {
        return true;
    } else {
        return false;
    }
}
    
let foundCourse = courses.find(findCourseByName);
console.log(foundCourse);

function findCoursesUnder100(course) {
    return Number(course.Fee) <= 100;
}

let foundCourses = courses.filter(findCoursesUnder100);
console.log(foundCourses);