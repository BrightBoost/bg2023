export class Comment {
    constructor(
        public postId: number,
        public id: number,
        public body: string,
        public email: string,
        public name: string
    ) { }
}
