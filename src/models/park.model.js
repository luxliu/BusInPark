
export class Park {
    constructor(width = 5, length = 5) {
        const columns = Array.from(Array(length).keys());
        this._matrix = Array.from(Array(width), () => [].slice.call(columns));
        this._width = width;
        this._length = length;
    }

    get width(){
        return this._width;
    }
    set width(value) {
        if (typeof value !== 'number') {
          throw new Error('"width" must be a number.');
        }
        this._width = value;
    }

    get length(){
        return this._length;
    }
    set length(value) {
        if (typeof value !== 'number') {
          throw new Error('"length" must be a number.');
        }
        this._length = value;
    }
 
    insidePark(bus) {
        return bus.xPosition >= 0 && bus.xPosition <= this.width - 1 && bus.yPosition >= 0 && bus.yPosition <= this.length - 1;
    }
}