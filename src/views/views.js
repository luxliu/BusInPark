import { Directions } from '../constants/direction.constant'
import { placeBus, leftBus, rightBus, moveBus, reportBus } from '../components/command.component'
import { Displays } from '../constants/display.constant';
import { Park } from '../models/park.model';
import { Bus } from '../models/bus.model';
import { appendText, getValue, emptyValue, disableBtnsByClass, enableBtnsByClass } from '../services/dom.service';

const oneBus = new Bus();
const onePark = new Park();

export const initPark = () => {
    //get x,y from DOM and init park
    
}


export const place = () => {
    let x = getValue('x_position');
    let y =  getValue('y_position');
    let direction = getValue('direction');
    //get x,y and direction from DOM
    placeBus(oneBus, x, y, direction).then(() => {
        emptyValue('report');
        const log = Displays.PLACE + `(${oneBus.xPosition} , ${oneBus.yPosition});`
        //append log to result textarea DOM
        appendText('report', log);
        //enable btns
        enableBtnsByClass('need_init');

    }).catch(err => { console.error(err) })
}

export const left = () => {
    leftBus(oneBus).then(() => {
        const log = Displays.LEFT;
        //append log to result textarea DOM
        appendText('report','\n' + log);
    }).catch(err => { console.error(err) })
}

export const right = () => {
    rightBus(oneBus).then(() => {
        const log = Displays.RIGHT;
        //append log to result textarea DOM
        appendText('report','\n' + log);
    }).catch(err => { console.error(err) })
}

export const move = () => {
    moveBus(oneBus, onePark).then(stopped => {
        console.log(oneBus.yPosition)
        let log = Displays.MOVE;
        if(stopped) log = Displays.STOPPED;
        appendText('report','\n' + log);
        //append log to result textarea DOM
    }).catch(err => { console.error(err) })
}

export const report = () => {
    reportBus(oneBus).then(report => {
        //append report to report DOM
        appendText('report','\n' + report);
    }).catch(err => { console.error(err) })
}