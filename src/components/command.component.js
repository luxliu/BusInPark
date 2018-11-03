import { Directions } from '../constants/direction.constant'
import { Bus } from '../models/bus.model';


const directionArray = Object.values(Directions);
export const placeBus = async function (bus, x = 0, y = 0, direction = Directions.EAST) {
    if (!bus)
        bus = new Bus();
    bus.xPosition = x;
    bus.yPosition = y;
    bus.direction = direction;
}

export const moveBus = async function (bus, park) {
    let virtualBus = Object.create(bus);
    virtualBus.move(1);
    if (park.insidePark(virtualBus)) bus.move(1)
    else return true;
}

export const leftBus = async function (bus) {
    const index = directionArray.indexOf(bus.direction);
    const targetDirection = index === 0 ? directionArray[directionArray.length - 1] : directionArray[index - 1];
    bus.changeDirection(targetDirection);
}

export const rightBus = async function (bus) {
    const index = directionArray.indexOf(bus.direction);
    const targetDirection = index === directionArray.length - 1 ? directionArray[0] : directionArray[index + 1];
    bus.changeDirection(targetDirection);
}

export const reportBus = async function (bus) {
    return `Bus is at ( ${bus.xPosition},${bus.yPosition} ) and facing ${bus.direction};`;
}