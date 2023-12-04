class Student {
    private studentId: Number;
    private name: String;

    constructor(studentId: Number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }
}

let s1: Student = new Student(1, "Bobby");
// console.log(`Student ID: ${s1.studentId}, Name: ${s1.name}`); // Output: error