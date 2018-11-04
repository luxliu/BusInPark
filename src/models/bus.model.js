import  {Directions,DirectionArray}  from '../constants/direction.constant'

export class Bus{
    constructor(xPosition = 0, yPosition = 0, direction = Directions.NORTH){
        this._xPosition = xPosition;
        this._yPosition = yPosition;
        this._direction = direction;
    }
    
    get xPosition(){
        return this._xPosition;
    }
    set xPosition(value) {
        if (typeof value !== 'number') {
          throw new Error('"xPosition" must be a number.');
        }
        this._xPosition = value;
    }

    get yPosition(){
        return this._yPosition;
    }

    set yPosition(value) {
        if (typeof value !== 'number') {
          throw new Error('"yPosition" must be a number.');
        }
        this._yPosition = value;
    }

    get direction(){
        return this._direction;
    }

    set direction(value) {
        
        if (!DirectionArray.includes(value)) {
          throw new Error('"direction" must be one of North, South, East and West.');
        }
        this._direction = value;
    }

    move(distance){
        switch (this.direction) {
            case Directions.NORTH:
                this.yPosition += distance;
                break;
            case Directions.SOUTH:
                this.yPosition -= distance;
                break;
            case Directions.WEST:
                this.xPosition -= distance;
                break;
            case Directions.EAST:
                this.xPosition += distance;
                break;
            default:
                break;
        }
    }
}