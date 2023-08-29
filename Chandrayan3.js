class GalacticSpaceCraft {

    constructor({ x, y, z }, currDirection) {
        this.coordinates = {
            x: x,
            y: y,
            z: z
        };
        this.currDirection = currDirection;
        this.prevDirection = null;
    }
}

module.exports = GalacticSpaceCraft;
