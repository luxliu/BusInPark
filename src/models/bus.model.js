import  {directions}  from '../constants/direction.constant'

export class Bus{
    constructor(xPosition = 0, yPosition = 0, direction = directions.NORTH){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.direction = direction;
    }

    move(distance){
        switch (this.direction) {
            case directions.NORTH:
                this.yPosition += distance;
                break;
            case directions.SOUTH:
                this.yPosition -= distance;
                break;
            case directions.WEST:
                this.xPosition -= distance;
                break;
            case directions.EAST:
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