// optional parameters
function addNrs(x: number, y: number, z?: number): number {
    if(z) {
        return x + y + z;
    } else {
        return x + y;
    }
}

addNrs(1, 2);
addNrs(1, 2, 3);

// default parameters
function addMoreNrs(x: number, y: number = 0, z: number = 0): number {
    return x + y + z;
}

addMoreNrs(1);
addMoreNrs(1, 2);
