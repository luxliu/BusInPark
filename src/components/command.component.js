import { directions } from '../constants/direction.constant'
import { Bus } from '../models/bus.model';


const directionArray = Object.values(directions);
export const placeBus = function (bus, x = 0, y = 0, direction = directions.EAST) {
    if (!bus)
        bus = new Bus();
    bus.xPosition = x;
    bus.yPosition = y;
    bus.direction = direction;
    return bus;
}

export const moveBus = function (bus, park) {
    let virtualBus = { ...bus };
    virtualBus.move(1);
    if (park.insidePark(virtualBus)) bus.move(1);
    return bus;
}

export const leftBus = function (bus) {
    const index = directionArray.indexOf(bus.direction);
    const targetDirection = index === 0 ? directionArray[directionArray.length - 1] : directionArray[index - 1];
    bus.changeDirection(targetDirection);
    return bus;
}

export const rightBus = function (bus) {
    const index = directionArray.indexOf(bus.direction);
    const targetDirection = index === directionArray.length - 1 ? directionArray[0] : directionArray[index + 1];
    bus.changeDirection(targetDirection);
    return bus;
}

export const reportBus = function (bus) {
    return `Bus is at ( ${bus.xPosition},${bus.yPosition} and facing ${bus.direction}`;
}