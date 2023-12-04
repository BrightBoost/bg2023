class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    public get x(): number {
        return this._x;
    }
    public get y(): number {
        return this._y;
    }
}

let p1: Point = new Point(3, 3);
console.log(`p1.x=${p1.x}, p1.y=${p1.y}`); 
