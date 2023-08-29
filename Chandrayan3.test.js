const GalacticSpaceCraft = require('./Chandrayan3');

describe('Chandrayan3GSCC', () => {

    test('space craft should move 1 step forward correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function will move space craft 1 step forward without changing direction
        c.moveForward();
        expect(c.getPosition()).toEqual('Position : [ 0, 1, 0 ] Direction : N');
    })

    test('space craft should move 1 step backward correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function will move space craft 1 step backward without changing direction
        c.moveBackward();
        expect(c.getPosition()).toEqual('Position : [ 0, -1, 0 ] Direction : N');
    })


    test('space craft should move to Left direction correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function will only change direction to left not move steps
        c.moveLeft();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : W');
    })


    test('space craft should move to Right direction correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function will only change direction to right not move steps
        c.moveRight();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : E');
    })


    test('space craft should move to Upward direction correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function will only change direction to upward not move steps
        c.moveUpward();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : U');
    })


    test('space craft should move to Downward direction correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function will only change direction to downward not move steps
        c.moveDownward();
        expect(c.getPosition()).toEqual('Position : [ 0, 0, 0 ] Direction : D');
    })


    test('space craft should move 1 step forward and turn left correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function getCoordinates will first move 1 step forward then change its direction to left
        const result = c.getCoordinates(['f', 'l']);
        expect(result).toEqual('Position : [ 0, 1, 0 ] Direction : W');
    })


    test('space craft should move to left and forward 1 step correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function getCoordinates will first change its direction to left then move 1 step forward 
        const result = c.getCoordinates(['l', 'f']);
        expect(result).toEqual('Position : [ -1, 0, 0 ] Direction : W');
    })


    test('space craft should move as per needed array of commands correctly', () => {
        const c = new GalacticSpaceCraft({ x: 0, y: 0, z: 0 }, 'N');
        //this function getCoordinates will first change its direction to left then move 1 step forward 
        const result = c.getCoordinates(['f', 'r', 'u', 'b', 'l']);
        expect(result).toEqual('Position : [ 0, 1, -1 ] Direction : N');
    })
})