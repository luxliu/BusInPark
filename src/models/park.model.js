import { Directions } from '../constants/direction.constant'

export class Park {
    constructor(width = 5, length = 5) {
        const columns = Array.from(Array(length).keys());
        this.matrix = Array.from(Array(width), () => [].slice.call(columns));
        this.width = width;
        this.length = length;
    }

    insidePark(bus) {
        return bus.xPosition >= 0 && bus.xPosition <= this.width - 1 && bus.yPosition >= 0 && bus.yPosition <= this.length - 1;
    }
}