export class Card {
    constructor(
        public id: number,
        public name: string,
        public stars: number,
        public picture: string,
        public description: string,
        public type: string,
        public attack: number,
        public defense: number
    ) {

    }
}
