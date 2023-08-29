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

    moveForward() {
        switch (this.currDirection) {
            case 'N':
                this.coordinates.y++;
                break;
            case 'S':
                this.coordinates.y--;
                break;
            case 'E':
                this.coordinates.x++;
                break;
            case 'W':
                this.coordinates.x--;
                break;
            case 'U':
                this.coordinates.z++;
                break;
            case 'D':
                this.coordinates.z--;
                break;
        }
    }


    getPosition() {
        return `Position : [ ${this.coordinates.x}, ${this.coordinates.y}, ${this.coordinates.z} ] Direction : ${this.currDirection}`;
    }
}

module.exports = GalacticSpaceCraft;
