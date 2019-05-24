// Rover Object Goes Here
// ======================
var rover = {
    /* direction values are: "N", "S", "E", "W" */
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};
// ======================
const LIMIT_X = 10
const LIMIT_Y = 10

function turnLeft(rover) {
    console.log("Previous Direction: " + rover.direction);
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "N";
            break;
    }
    console.log("Current Direction: " + rover.direction);
}

function turnRight(rover) {
    console.log("Previous Direction: " + rover.direction);
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;
        case "E":
            rover.direction = "S";
            break;
        case "S":
            rover.direction = "W";
            break;
        case "W":
            rover.direction = "N";
            break;
    }
    console.log("Current Direction: " + rover.direction);
}

function moveForward(rover) {
    console.log("Previous X,Y: (" + rover.x + "," + rover.y + ")");
    switch (rover.direction) {
        case "N":
            if (rover.y > 0) {
                rover.y -= 1;
            } else {
                rover.y = 0;
            }
            break;
        case "E":
            if (rover.x < LIMIT_X) {
                rover.x += 1;
            } else {
                rover.x = LIMIT_X;
            }
            break;
        case "S":
            if (rover.y < LIMIT_Y) {
                rover.y += 1;
            } else {
                rover.y = LIMIT_Y;
            }
            break;
        case "W":
            if (rover.X > 0) {
                rover.x -= 1;
            } else {
                rover.x = 0;
            }
            break;
    }
    console.log("Current X,Y: (" + rover.x + "," + rover.y + ")");
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
        }
        rover.travelLog.push(rover.x + "," + rover.y);
    }
    rover.travelLog.forEach(movement => {
        console.log(movement);
    });
}