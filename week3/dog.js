class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }

    get latestGrade() {
        return this.grades[this.grades.length - 1];
    }

}

let s1 = new Student("Sophie", ["A", "A-", "A+"]);
console.log(`${s1.name}'s last grade is ${s1.latestGrade}`); // Sophie's last grade