import { Directions,DirectionArray } from '../constants/direction.constant'
import { Bus } from '../models/bus.model';

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
    const index = DirectionArray.indexOf(bus.direction);
    const targetDirection = index === 0 ? DirectionArray[DirectionArray.length - 1] : DirectionArray[index - 1];
    bus.direction = targetDirection;
}

export const rightBus = async function (bus) {
    const index = DirectionArray.indexOf(bus.direction);
    const targetDirection = index === DirectionArray.length - 1 ? DirectionArray[0] : DirectionArray[index + 1];
    bus.direction = targetDirection;
}

export const reportBus = async function (bus) {
    return `Bus is at ( ${bus.xPosition},${bus.yPosition} ) and facing ${bus.direction};`;
}