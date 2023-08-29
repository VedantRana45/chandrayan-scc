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

    // function for moving space craft 1 step forward without changing direction
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

    // function for moving space craft 1 step backward without changing direction
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

    // function for changing only the direction to left using prevDirection 
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

    // function for changing only the direction to right using prevDirection 
    moveRight() {
        switch (this.currDirection) {
            case 'N':
                this.currDirection = 'E';
                this.prevDirection = 'N';
                break;
            case 'S':
                this.currDirection = 'W';
                this.prevDirection = 'S';
                break;
            case 'E':
                this.currDirection = 'S';
                this.prevDirection = 'E';
                break;
            case 'W':
                this.currDirection = 'N';
                this.prevDirection = 'W';
                break;
            case 'U':
                {
                    switch (this.prevDirection) {
                        case 'N':
                            this.currDirection = 'E';
                            this.prevDirection = 'U';
                            break;
                        case 'S':
                            this.currDirection = 'W';
                            this.prevDirection = 'U';
                            break;
                        case 'E':
                            this.currDirection = 'S';
                            this.prevDirection = 'U';
                            break;
                        case 'W':
                            this.currDirection = 'N';
                            this.prevDirection = 'U';
                            break;
                    }
                }
                break;
            case 'D':
                {
                    switch (this.prevDirection) {
                        case 'N':
                            this.currDirection = 'E';
                            this.prevDirection = 'D';
                            break;
                        case 'S':
                            this.currDirection = 'W';
                            this.prevDirection = 'D';
                            break;
                        case 'E':
                            this.currDirection = 'S';
                            this.prevDirection = 'D';
                            break;
                        case 'W':
                            this.currDirection = 'N';
                            this.prevDirection = 'D';
                            break;
                    }
                }
                break;
        }
    }

    // function for changing only the direction to upward
    moveUpward() {
        this.prevDirection = this.currDirection;
        this.currDirection = 'U';
    }

    // function for changing only the direction to downward
    moveDownward() {
        this.prevDirection = this.currDirection;
        this.currDirection = 'D';
    }

    //function for getting coordinates and direction for single command
    getPosition() {
        return `Position : [ ${this.coordinates.x}, ${this.coordinates.y}, ${this.coordinates.z} ] Direction : ${this.currDirection}`;
    }

    //function for getting coordinates and direction for array of multiple commands
    getCoordinates(directedSteps) {
        for (const step of directedSteps) {
            switch (step) {
                case 'f':
                    this.moveForward();
                    break;
                case 'b':
                    this.moveBackward();
                    break;
                case 'l':
                    this.moveLeft();
                    break;
                case 'r':
                    this.moveRight();
                    break;
                case 'u':
                    this.moveUpward();
                    break;
                case 'd':
                    this.moveDownward();
                    break;
            }
        }

        var result = `Position : [ ${this.coordinates.x}, ${this.coordinates.y}, ${this.coordinates.z} ] Direction : ${this.currDirection}`;
        return result;
    }
}

module.exports = GalacticSpaceCraft;
