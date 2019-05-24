const LIMIT_X = 10;
const LIMIT_Y = 10;
const NORTH = "N";
const SOUTH = "S";
const EAST = "E";
const WEST = "W"

// Rover Object Goes Here
// ======================
var rover = {
    /* direction values are: "N", "S", "E", "W" */
    direction: NORTH,
    x: 0,
    y: 0,
    travelLog: []
};
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
        console.log("Movement: " + cont + "(" + listMovements[cont] + ")");
        switch (listMovements[cont]) {
            case "f":
                moveForward(rover);
                break;
            case "l":
                turnLeft(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "b":
                moveBackward(rover);
                break;
        }
        rover.travelLog.push(rover.x + "," + rover.y);
    }
    rover.travelLog.forEach(movement => {
        console.log(movement);
    });
}