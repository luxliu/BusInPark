import { directions } from '../constants/direction.constant'
import { placeBus, leftBus, rightBus, moveBus, reportBus } from '../components/command.component'
import { displays } from '../constants/display.constant';
import { Park } from '../models/park.model';
import { Bus } from '../models/bus.model';

const oneBus = new Bus();
const onePark = new Park();

export const initPark = () => {
    //get x,y from DOM and init park

}


export const place = () => {
    let x = 0;
    let y = 0;
    let direction = directions.NORTH;
    //get x,y and direction from DOM
    placeBus(oneBus, x, y, direction).then(() => {
        const log = displays.PLACE + `(${oneBus.xPosition} , ${oneBus.yPosition})`
        //append log to result textarea DOM
    }).catch(err => { console.error(err)})
}

export const left = () => {
    leftBus(oneBus).then(() => {
        const log = displays.LEFT;
        //append log to result textarea DOM
    }).catch(err => { console.error(err)})
}

export const right = () => {
    rightBus(oneBus).then(() => {
        const log = displays.RIGHT;
        //append log to result textarea DOM
    }).catch(err => {console.error(err) })
}

export const move = () => {
    moveBus(oneBus, onePark).then(() => {
        console.log(oneBus.yPosition)
        const log = displays.MOVE;
        //append log to result textarea DOM
    }).catch(err => {console.error(err) })
}

export const report = () => {
    reportBus(oneBus).then(report => {
        //append report to report DOM
        console.log(report);
    }).catch(err=>{console.error(err)})
}