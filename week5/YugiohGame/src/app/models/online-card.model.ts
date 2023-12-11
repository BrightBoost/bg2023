export class OnlineCard {
    constructor(
        public archetype: string,
        public card_images: Array<any>,
        public card_prices: Array<any>,
        public card_sets: Array<any>,
        public desc: string,
        public frameType: string,
        public id: number,
        public name: string,
        public race: string,
        public type: string,
        public ygoprodeck_url: string
    ) {}
}
