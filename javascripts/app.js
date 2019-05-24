//Limits for the rover grid
const LIMIT_X = 10;
const LIMIT_Y = 10;
//Values for the direction
const NORTH = "N";
const SOUTH = "S";
const EAST = "E";
const WEST = "W";

const EMPTY = "E";
const OBSTACLE = "O";

const MOVING_FORWARD = "f";
const MOVING_BACKWARD = "b";
const TURNING_LEFT = "l";
const TURNING_RIGHT = "r";

// Rover Object Goes Here
// ======================
var rover = {
    direction: NORTH,
    x: 0,
    y: 0,
    travelLog: []
};

var obstacles = [
        [EMPTY, EMPTY, OBSTACLE, EMPTY, EMPTY, EMPTY, OBSTACLE, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, OBSTACLE, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, OBSTACLE, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, OBSTACLE, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [OBSTACLE, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, OBSTACLE, EMPTY, EMPTY, EMPTY, OBSTACLE],
        [EMPTY, OBSTACLE, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, OBSTACLE, OBSTACLE, EMPTY]
    ]
    //"rffrfflfrf"
    // ======================

function turnLeft(rover) {
    //console.log("Previous Direction: " + rover.direction);
    switch (rover.direction) {
        case NORTH:
            rover.direction = WEST;
            break;
        case WEST:
            rover.direction = SOUTH;
            break;
        case SOUTH:
            rover.direction = EAST;
            break;
        case EAST:
            rover.direction = NORTH;
            break;
    }
    //console.log("Current Direction: " + rover.direction);
}

function turnRight(rover) {
    //console.log("Previous Direction: " + rover.direction);
    switch (rover.direction) {
        case NORTH:
            rover.direction = EAST;
            break;
        case EAST:
            rover.direction = SOUTH;
            break;
        case SOUTH:
            rover.direction = WEST;
            break;
        case WEST:
            rover.direction = NORTH;
            break;
    }
    //console.log("Current Direction: " + rover.direction);
}

function moveForward(rover) {
    //console.log("Previous X,Y: (" + rover.x + "," + rover.y + ")");
    switch (rover.direction) {
        case NORTH:
            if (rover.y > 0) {
                rover.y -= 1;
            } else {
                rover.y = 0;
            }
            break;
        case EAST:
            if (rover.x < LIMIT_X) {
                rover.x += 1;
            } else {
                rover.x = LIMIT_X;
            }
            break;
        case SOUTH:
            if (rover.y < LIMIT_Y) {
                rover.y += 1;
            } else {
                rover.y = LIMIT_Y;
            }
            break;
        case WEST:
            if (rover.X > 0) {
                rover.x -= 1;
            } else {
                rover.x = 0;
            }
            break;
    }
    //console.log("Current X,Y: (" + rover.x + "," + rover.y + ")");
}

function moveBackward(rover) {
    //console.log("Previous X,Y: (" + rover.x + "," + rover.y + ")");
    switch (rover.direction) {
        case NORTH:
            if (rover.y < LIMIT_Y) {
                rover.y += 1;
            } else {
                rover.y = LIMIT_Y;
            }
            break;
        case EAST:
            if (rover.x > 0) {
                rover.x -= 1;
            } else {
                rover.x = 0;
            }
            break;
        case S:
            if (rover.y > 0) {
                rover.y -= 1;
            } else {
                rover.y = 0;
            }
            break;
        case WEST:
            if (rover.X < LIMIT_X) {
                rover.x += 1;
            } else {
                rover.x = LIMIT_X;
            }
            break;
    }
    //console.log("Current X,Y: (" + rover.x + "," + rover.y + ")");
}

function listCommands(listMovements) {
    for (var cont = 0; cont <= listMovements.length - 1; cont++) {
        if (validMove(listMovements[cont])) {
            console.log("Movement Nº" + cont);
            console.log("============")
            if (notThereIsObstacle(listMovements[cont])) {
                console.log("Any obstacle detected");
                switch (listMovements[cont]) {
                    case MOVING_FORWARD:
                        moveForward(rover);
                        console.log("Rover is moving forward to the direction: " + rover.direction);
                        break;
                    case TURNING_LEFT:
                        turnLeft(rover);
                        console.log("Rover is turning to the left and facing to the direction: " + rover.direction);
                        break;
                    case TURNING_RIGHT:
                        turnRight(rover);
                        console.log("Rover is turning to the right and facing to the direction: " + rover.direction);
                        break;
                    case MOVING_BACKWARD:
                        moveBackward(rover);
                        console.log("Rover is moving backward to the direction: " + rover.direction);
                        break;
                }
            } else {
                console.log("Obstacle detected, ¡STOP ROVER!");
            }
            console.log("Coordenates: " + rover.x + "," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
        }
    }
    console.log("-----------\n" + "Tracking: ");
    rover.travelLog.forEach(movement => {
        console.log(movement);
    });
}

function validMove(movement) {
    var validMovements = [MOVING_FORWARD, TURNING_LEFT, TURNING_RIGHT, MOVING_BACKWARD];
    return (validMovements.indexOf(movement) >= 0)

}

function notThereIsObstacle(movement) {
    switch (movement) {
        case MOVING_FORWARD:
            switch (rover.direction) {
                case NORTH:
                    return (obstacles[rover.y - 1][rover.x] === EMPTY);
                    break;
                case EAST:
                    return (obstacles[rover.y][rover.x + 1] === EMPTY);
                    break;
                case SOUTH:
                    return (obstacles[rover.y + 1][rover.x] === EMPTY);
                    break;
                case WEST:
                    return (obstacles[rover.y][rover.x - 1] === EMPTY);
                    break;
            }
        case MOVING_BACKWARD:
            switch (rover.direction) {
                case NORTH:
                    return (obstacles[rover.x][rover.y + 1] === EMPTY);
                    break;
                case EAST:
                    return (obstacles[rover.x - 1][rover.y] === EMPTY);
                    break;
                case SOUTH:
                    return (obstacles[rover.x][rover.y - 1] === EMPTY);
                    break;
                case WEST:
                    return (obstacles[rover.x + 1][rover.y] === EMPTY);
                    break;
            }
        default:
            return true;
            break;
    }
}