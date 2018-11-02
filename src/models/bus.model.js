import  {Directions}  from '../constants/direction.constant'

export class Bus{
    constructor(xPosition = 0, yPosition = 0, direction = Directions.NORTH){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.direction = direction;
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

    changeDirection(direction){
        this.direction = direction;
    }



}