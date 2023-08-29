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

    moveBackward() {
        switch (this.currDirection) {
            case 'N':
                this.coordinates.y--;
                break;
            case 'S':
                this.coordinates.y++;
                break;
            case 'E':
                this.coordinates.x--;
                break;
            case 'W':
                this.coordinates.x++;
                break;
            case 'U':
                this.coordinates.z--;
                break;
            case 'D':
                this.coordinates.z++;
                break;
        }
    }

    moveLeft() {
        switch (this.currDirection) {
            case 'N':
                this.currDirection = 'W';
                this.prevDirection = 'N';
                break;
            case 'S':
                this.currDirection = 'E';
                this.prevDirection = 'S';
                break;
            case 'E':
                this.currDirection = 'N';
                this.prevDirection = 'E';
                break;
            case 'W':
                this.currDirection = 'S';
                this.prevDirection = 'W';
                break;
            case 'U':
                {
                    switch (this.prevDirection) {
                        case 'N':
                            this.currDirection = 'W';
                            this.prevDirection = 'U';
                            break;
                        case 'S':
                            this.currDirection = 'E';
                            this.prevDirection = 'U';
                            break;
                        case 'E':
                            this.currDirection = 'N';
                            this.prevDirection = 'U';
                            break;
                        case 'W':
                            this.currDirection = 'S';
                            this.prevDirection = 'U';
                            break;
                    }
                }
                break;
            case 'D':
                {
                    switch (this.prevDirection) {
                        case 'N':
                            this.currDirection = 'W';
                            this.prevDirection = 'D';
                            break;
                        case 'S':
                            this.currDirection = 'E';
                            this.prevDirection = 'D';
                            break;
                        case 'E':
                            this.currDirection = 'N';
                            this.prevDirection = 'D';
                            break;
                        case 'W':
                            this.currDirection = 'S';
                            this.prevDirection = 'D';
                            break;
                    }
                }
                break;
        }
    }

    getPosition() {
        return `Position : [ ${this.coordinates.x}, ${this.coordinates.y}, ${this.coordinates.z} ] Direction : ${this.currDirection}`;
    }
}

module.exports = GalacticSpaceCraft;
