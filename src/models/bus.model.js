import  {directions}  from '../constants/direction.constant'

export class Bus{
    constructor(xPosition, yPosition, derection){
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.derection = derection;
    }

    move(distance){
        switch (this.derection) {
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