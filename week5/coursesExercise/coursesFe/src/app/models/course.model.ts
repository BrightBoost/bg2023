export class Course {
    constructor(
        public id: number,
        public dept: string,
        public courseNum: string,
        public courseName: string,
        public instructor: string,
        public startDate: string,
        public numDays: number
    ) { }
}
